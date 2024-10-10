import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import HighlightText from '../components/core/HomePage/HighlightText';
import CTAButton from '../components/core/HomePage/Button'
import Banner from '../assets/Images/banner.mp4'
import CodeBlock from '../components/core/HomePage/CodeBlock';
import TimelineSection from '../components/core/HomePage/TimelineSection';
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection';
import InstructorSection from '../components/core/HomePage/InstructorSection';
import ExploreMore from '../components/core/HomePage/ExploreMore';

const Home = () => {
  return (
    <div className=''>

      {/* **************************************************************************************
                                            Section 1
         ***************************************************************************************/}
        <div className=' relative mx-auto flex flex-col w-11/12 items-center text-white justify-between'>

        {/* Become a Instructor Button */}
        <Link to ="/signup">
                <div className='group mt-16 outline-none p-1 mx-auto rounded-full text-richblack-200 bg-richblack-800 font-bold drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-none duration-200 hover:scale-95 '>
                    <div className='flex flex-row gap-2 rounded-full items-center px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900'>
                        <p>Become an instrcutor</p>
                        <FaArrowRight />
                    </div>
                </div>
        </Link> 

       {/* Heading */}
        <div className='text-center text-4xl mt-4 font-serif font-semibold p-4'>
          Empower Your Future with
          <HighlightText text={"Coding Skills"}/>
        </div>  

        {/* Sub-Heading */}
        <div className='w-[90%]  text-center text-lg font-bold text-richblack-300 '>
          <p>With our online coding courses, you can learn at your own pace, from anywhere in the world, 
            and get access to a wealth of resources, including hands-on projects, quizzes, 
            and personalized feedback from instructors.</p>
        </div>

        {/* CTA Button */}
        <div className='mt-16 mb-9 flex flex-row gap-7'>
          <CTAButton linkto={'/signup'} active={true}> Learn More</CTAButton>
          <CTAButton linkto={'/login'} active={false}> Book a Demo</CTAButton>
        </div>

        {/* video */}
        <div className='mx-3 mb-12 shadow-[10px_-5px_50px_-5px] shadow-blue-200'>
          <video
          className="shadow-[20px_20px_rgba(255,255,255)] shadow-caribbeangreen-400"
          muted 
          autoPlay
          loop >
            <source src={Banner} type='video/mp4'/>
          </video>
        </div>

        {/* Code Section 1 */}
        <div className='flex flex-col'>
          <CodeBlock
          position={'lg:flex-row'}
          heading={
            <div className='text-4xl font-semibold'>
              Unlock your 
              <HighlightText text={'coding potential '}/>
               with our online courses.
            </div>
          }
          subHeading={'Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you.'}
          ctabtn1={{
            btnText: "Try it Yourself",
            link: "/signup",
            active: true,
          }}
          ctabtn2={{
            btnText: "Learn More",
            link: "/signup",
            active: false,
          }}
          codeColor={"text-yellow-25"}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          ></CodeBlock>

          {/* Code Section 2 */}
          <CodeBlock
          position={'lg:flex-row-reverse'}
          heading={
            <div className='text-4xl font-semibold w-[100%] lg:w-[50%] '>
              Start
              <HighlightText text={'Coding in Seconds'}></HighlightText>
            </div>
          }
          subHeading={"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."}
          
          ctabtn1={
            {btnText: "Continue Lesson",
            link: '/signup',
            active: true,
          }
          }
          ctabtn2={
            {btnText: "Learn More",
            link: '/login',
            active: false,
          }
          }
          codeColor={"text-white"}
          codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
          backgroundGradient={<div className="codeblock2 absolute"></div>}
          
          >
          </CodeBlock>
        </div>

        <div>
          <ExploreMore/>
        </div>

        </div>



     {/* **************************************************************************************
                                            Section 2
         ***************************************************************************************/}

      <div className=' bg-pure-greys-5 text-richblack-700'>
        <div className='homepage_bg h-[320px] flex flex-row gap-7 items-center'>
        
          {/* Explore and more buttons */}
          <div className='flex flex-row gap-7 mx-auto text-white mt-32 items-center '>
          
          <CTAButton active={true} linkto={"/signup"}>
           <div className='flex flex-row gap-3 items-center'> 
            Explore Full Catalog
           <FaArrowRight/>
           </div>
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
              Learn More
          </CTAButton>
          </div>
        </div>

        {/* Job that is in demand text */}
        <div className='w-11/12 mx-auto flex items-center justify-between my-20 '>
          <div className='text-4xl lg:w-[45%] font-semibold'>
          Get the skills you need for a
          <HighlightText text={"job that is in demand."}/>
          </div>
          <div className='flex flex-col gap-10 items-start lg:w-[40%]'>
                <div className='text-[16px]'>
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.</div>
                <CTAButton active={true} linkto={"/signup"}>
                <div className="">Learn More</div>
              </CTAButton>
          </div>
        </div>

        <div className='w-screen  mx-auto flex flex-col gpa-10 items-center justify-between'>
        <TimelineSection/>

        <LearningLanguageSection/>      
        </div>
       
      </div>


      {/* **************************************************************************************
                                            Section 3
         ***************************************************************************************/}

        <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
          <InstructorSection/>
        </div>



      {/* **************************************************************************************
                                            Footer
         ***************************************************************************************/}
    </div>
  )
}

export default Home
