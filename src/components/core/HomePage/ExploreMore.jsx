import React, { useState } from "react";
import HighlightText from "./HighlightText";
import { HomePageExplore } from "../../../data/homepage-explore";
import CourseCard from './CourseCard'

const tabsName = [
  "Free",
  "New to coding",
  "Most popular",
  "Skills paths",
  "Career paths",
];

const ExploreMore = () => {
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMyCards = (value) => {
    setCurrentTab(value);
    const result = HomePageExplore.filter((course) => course.tag === value);
    setCourses(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
  };

  return (
    <div>
      <div className="text-4xl text-center font-semibold my-10 ">
        Unlock the
        <HighlightText text={"Power of code"} />
        <p className="text-center text-richblack-300 text-lg font-semibold mt-1">
          Learn to Build Anything You Can Imagine
        </p>
      </div>

        <div className="hidden lg:flex gap-5 rounded-full w-max bg-richblack-800 text-richblack-200  -mt-5 mx-auto p-1 font-semibold drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] ">
         {tabsName.map((element, index) => {
          return (
            <div   className={` text-[16px] flex flex-row gap-2 items-center rounded-full ${currentTab ===element?'bg-richblack-900 text-richblack-5 scale-[109%]': 'text-richblack-200'} px-7 py-[7px] transition-all duration-200 hover:bg-richblack-900 hover:text-richblack-5 cursor-pointer  `} 
            key={index} onClick={() => setMyCards(element)}>
              {element}
            </div>
          );
        })}
      </div>
      <div className="hidden lg:block lg:h-[200px]"></div>

        <div className="lg:absolute gap-10 justify-center lg:gap-0 flex lg:translate-x-[-50%] lg:translate-y-[50%]  lg:justify-between flex-wrap w-full lg:bottom-0 lg:left-[50%] text-black lg:mb-0 mb-7 lg:px-0 px-3 ">
            {
                courses.map((element, index) => {
                    return(
                        <CourseCard
                        key={index}
                        cardData = {element}
                        currentCard={currentCard}
                        setCurrentCard={setCurrentCard}
                        />
                    )
                })
            }
        </div>



    </div>
  );
};

export default ExploreMore;
