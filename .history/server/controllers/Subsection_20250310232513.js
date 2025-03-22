// Import necessary modules
const Section = require("../models/Section");
const SubSection = require("../models/SubSection");
const Course = require("../models/Course");
const { uploadImageToCloudinary } = require("../utils/imageUploader");

// Create a new sub-section for a given section
exports.createSubSection = async (req, res) => {
  try {
    // Extract necessary information from the request body
    const { sectionId, title, description, courseId } = req.body;
    const video = req.files.video;
     clg
    // Proceed if all fields are valid
    console.log("video", video)
    if(!video){
      return res
        .status(404)
        .json({ success: false, message: "video is Required" });
    }

    if (!sectionId || !title || !description || !video || !courseId) {
      return res
        .status(404)
        .json({ success: false, message: "All Fields are Required" });
    }

    const ifsection = await Section.findById(sectionId);
    if (!ifsection) {
      return res
        .status(404)
        .json({ success: false, message: "Section not found" });
    }

    // Upload the video file to Cloudinary
    const uploadDetails = await uploadImageToCloudinary(
      video,
      process.env.FOLDER_VIDEO
    );

    console.log(uploadDetails);
    // Create a new sub-section with the necessary information
    const SubSectionDetails = await SubSection.create({
      title: title,
      // timeDuration: timeDuration,
      description: description,
      videoUrl: uploadDetails.secure_url,
    });

    // Update the corresponding section with the newly created sub-section
    const updatedSection = await Section.findByIdAndUpdate(
      { _id: sectionId },
      { $push: { subSection: SubSectionDetails._id } },
      { new: true }
    ).populate("subSection");

    const updatedCourse = await Course.findById(courseId)
      .populate({ path: "courseContent", populate: { path: "subSection" } })
      .exec();
    // Return the updated section in the response
    return res.status(200).json({ success: true, data: updatedCourse });
  } catch (error) {
    // Handle any errors that may occur during the process
    console.error("Error creating new sub-section:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

// UPDATE a sub-section


exports.updateSubSection = async (req, res) => {
  try {
    // Log the request body for debugging
    console.log("Request body:", req.body);

    // Extract necessary information from the request body
    const { subSectionId, title, description, courseId } = req.body;
    const video = req?.files?.video;


    // Validate that subSectionId is provided
    if (!subSectionId) {
      return res.status(400).json({
        success: false,
        message: "subSectionId is required",
      });
    }

    let uploadDetails = null;
    // Upload the video file to Cloudinary if provided
    if (video) {
      uploadDetails = await uploadImageToCloudinary(
        video,
        process.env.FOLDER_VIDEO
      );
    }

    // Update the sub-section with the necessary information
    const SubSectionDetails = await SubSection.findByIdAndUpdate(
      subSectionId, // Only the ID should be passed here
      {
        title: title || SubSection.title,
        description: description || SubSection.description,
        videoUrl: uploadDetails?.secure_url || SubSection.videoUrl,
      },
      { new: true } // This option returns the updated document
    );

    if (!SubSectionDetails) {
      return res.status(404).json({
        success: false,
        message: "Subsection not found",
      });
    }
     console.log()
    const updatedCourse = await Course.findById(courseId)
      .populate({ path: "courseContent", populate: { path: "subSection" } })
      .exec();

    // Return the updated course in the response
    return res.status(200).json({ success: true, data: updatedCourse });
  } catch (error) {
    // Handle any errors that may occur during the process
    console.error("Error updating sub-section:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};


exports.deleteSubSection = async (req, res) => {
  try {
    const { subSectionId, sectionId } = req.body;
    console.log("req body", req.body);
    
    // Validate that subSectionId and sectionId are provided
    if (!subSectionId || !sectionId) {
      return res.status(400).json({
        success: false,
        message: "subSectionId and sectionId are required",
      });
    }

    // Check if the section exists
    const section = await Section.findById(sectionId);
    if (!section) {
      return res.status(404).json({
        success: false,
        message: "Section not found",
      });
    }

    // Delete the sub-section and get the deleted document
    const deletedSubSection = await SubSection.findByIdAndDelete(subSectionId);
    if (!deletedSubSection) {
      return res.status(404).json({
        success: false,
        message: "Sub-section not found",
      });
    }

    // Remove the sub-section reference from the section's subSection array
    await Section.findByIdAndUpdate(
      sectionId,
      { $pull: { subSection: subSectionId } },
      { new: true }
    );

    // Fetch the updated section after the sub-section deletion
    const updatedSection = await Section.findById(sectionId)
      .populate("subSection")
      .exec();

    // Return success response with the updated section data
    return res.status(200).json({
      success: true,
      message: "Sub-section deleted",
      data: updatedSection,
    });

  } catch (error) {
    // Handle any errors that occur during the process
    console.error("Error deleting sub-section:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
