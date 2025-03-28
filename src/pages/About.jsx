import React from "react";
import HighlightText from "../components/core/HomePage/HighlightText";
import BannerImage1 from "../assets/Images/aboutus1.webp";
import BannerImage2 from "../assets/Images/aboutus2.webp";
import BannerImage3 from "../assets/Images/aboutus3.webp";
import FoundingStory from "../assets/Images/FoundingStory.png";
import Quote from "../components/core/AboutPage/Quote";
import StatsComponent from "../components/core/AboutPage/StatsComponent";
import LearningGrid from "../components/core/AboutPage/LearningGrid";
import ContactUsForm from '../components/ContactUs/ContactUsForm'

const About = () => {
  return (
    <div className="mx-auto text-white ">

        {/* section 1 */}
      <section className="bg-richblack-700">
      <div className='relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white'>
      <header className="mx-auto py-20 text-4xl font-semibold  lg:w-[70%]">
              Driving Innovation in Online Education for a
              <HighlightText text={"Brighter Future"}></HighlightText>
              <p className="text-[16px] text-center mt-3 text-base font-semibold lg:w-[95%] text-richblack-300">
              Studynotion is at the forefront of driving innovation in online
              education. We're passionate about creating a brighter future by
              offering cutting-edge courses, leveraging emerging technologies,
              and nurturing a vibrant learning community.
            </p>
          </header>
          <div className='sm:h-[70px] lg:h-[150px]'></div>
          <div className='absolute flex flex-row gap-3 bottom-0 left-[50%] w-[100%] lg:gap-5 items-center justify-between translate-x-[-50%] translate-y-[30%] '>
          <img src={BannerImage1} />
            <img src={BannerImage2} />
            <img src={BannerImage3} />
          </div>
        </div>
      </section>


        {/* Section 2 */}
      <section className="border-b border-richblack-700 mt-36">
        <div className="mx-auto text-center  w-11/12">
          <Quote />
        </div>
      </section>

      <section className="w-11/12 mt-24  max-w-maxContent mx-auto text-richblack-500 flex flex-col mb-28 gap-10" >
        <div className="flex justify-between" >
          <div className="flex flex-col gap-1 w-[60%] ">
            <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl text-transparent font-semibold lg:w-[70%]">Our Founding Story</h1>
            <p className="text-lg text-richblack-300 mt-8 font-medium lg:w-[95%]">
              Our e-learning platform was born out of a shared vision and
              passion for transforming education. It all began with a group of
              educators, technologists, and lifelong learners who recognized the
              need for accessible, flexible, and high-quality learning
              opportunities in a rapidly evolving digital world.
            </p>
            <p className="text-lg text-richblack-300 mt-8 font-inter font-medium lg:w-[95%]">
              As experienced educators ourselves, we witnessed firsthand the
              limitations and challenges of traditional education systems. We
              believed that education should not be confined to the walls of a
              classroom or restricted by geographical boundaries. We envisioned
              a platform that could bridge these gaps and empower individuals
              from all walks of life to unlock their full potential.
            </p>
          </div>

          <div>
            <img className="shadow-[0_0_20px_0] shadow-blue-100 mt-8" src={FoundingStory}  />
          </div>

        </div>

        <div className="flex mt-[18%] justify-between ">
          {/* left Box */}
          <div className=" max-w-lg ">
            <h2 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl  mb-10 font-semibold text-transparent">Our Vision</h2>
            <p className="text-[17px] font-medium text-richblack-300 lg:w-[95%]">
              With this vision in mind, we set out on a journey to create an
              e-learning platform that would revolutionize the way people learn.
              Our team of dedicated experts worked tirelessly to develop a
              robust and intuitive platform that combines cutting-edge
              technology with engaging content, fostering a dynamic and
              interactive learning experience.
            </p>
          </div>

          {/* right box */}
          <div className=" max-w-lg">
            <h2 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] bg-clip-text mb-10 text-transparent text-4xl font-semibold">Our Mission</h2>
            <p className="text-[17px] font-medium text-richblack-300 lg:w-[95%]">
              Our mission goes beyond just delivering courses online. We wanted
              to create a vibrant community of learners, where individuals can
              connect, collaborate, and learn from one another. We believe that
              knowledge thrives in an environment of sharing and dialogue, and
              we foster this spirit of collaboration through forums, live
              sessions, and networking opportunities.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10 bg-richblack-700">
        <StatsComponent />
      </section>

      <section className="mx-auto p-2 flex flex-col items-center justify-between gap-5 mb-[140px]">
        <LearningGrid />
        <div className='mx-auto mt-20 tracking-wide'>
        <h1 className='text-center text-4xl font-semibold'>Get in Touch</h1>
        <p className='text-center text-richblack-300  mt-3'>We'd love to here for you, Please fill out this form.</p>
        <div><ContactUsForm/></div>
    </div>
      </section>
    </div>
  );
};

export default About;
