const Section = require("../models/Section");
const SubSection = require("../models/SubSection");
const Course = require("../models/Course");
const { uploadImageToCloudinary } = require("../utils/imageUploader");

exports.createSubSection = async (req, res) => {
  try {
    // Extract necessary information from the request body
    const { sectionId, title, description, courseId } = req.body;
    const video = req.files?.video;

    // Log received data
    console.log("Received Request Body:", req.body);
    console.log("Received Files:", req.files);

    // Validate required fields
    if (!sectionId || !title || !description || !video || !courseId) {
      return res.status(400).json({ success: false, message: "All Fields are Required" });
    }

    // Check if section exists
    const ifSection = await Section.findById(sectionId);
    if (!ifSection) {
      return res.status(404).json({ success: false, message: "Section not found" });
    }

    // Check MIME type and size (optional but recommended)
    const allowedTypes = ["video/mp4", "video/mkv", "video/webm"];
    if (!allowedTypes.includes(video.mimetype)) {
      return res.status(400).json({ success: false, message: "Invalid video format" });
    }

    if (video.size > 50 * 1024 * 1024) {
      return res.status(400).json({ success: false, message: "File size exceeds 50MB" });
    }

    // Upload the video file to Cloudinary
    console.log("Uploading video to Cloudinary...");
    const uploadDetails = await uploadImageToCloudinary(video, process.env.FOLDER_VIDEO);
    console.log("Cloudinary Upload Response:", uploadDetails);

    // Create a new sub-section
    const subSectionDetails = await SubSection.create({
      title,
      description,
      videoUrl: uploadDetails.secure_url,
    });

    // Update the corresponding section with the new sub-section
    const updatedSection = await Section.findByIdAndUpdate(
      sectionId,
      { $push: { subSection: subSectionDetails._id } },
      { new: true }
    ).populate("subSection");

    // Update course content
    const updatedCourse = await Course.findById(courseId)
      .populate({ path: "courseContent", populate: { path: "subSection" } })
      .exec();

    return res.status(200).json({ success: true, data: updatedCourse });
  } catch (error) {
    console.error("Error creating new sub-section:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
