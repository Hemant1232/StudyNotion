import React from "react";
import HighlightText from "../HomePage/HighlightText";
import CTAButton from "../HomePage/Button";

const LearningGridArray = [
  {
    order: -1,
    heading: "World-Class Learning for",
    highlightText: "Anyone, Anywhere",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
    BtnText: "Learn More",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Curriculum Based on Industry Needs",
    description:
      "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
  },
  {
    order: 2,
    heading: "Our Learning Methods",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 3,
    heading: "Certification",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 4,
    heading: `Rating "Auto-grading"`,
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 5,
    heading: "Ready to Work",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
];

const LearningGrid = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-2 w-11/12 mx-auto">
      {LearningGridArray.map((data, index) => {
        return (
          <div
            key={index}
            className={`${index === 0 && "lg:col-span-2"}
                        ${
                          data.order % 2 === 1
                            ? "bg-richblack-700"
                            : "bg-richblack-800"
                        }
                        ${data.order === 3 && "lg:col-start-2"}
                        ${data.order < 0 && "bg-transparent"}
                    h-[300px] place-items-center`}
          >
            {data.order === -1 ? (
              <div className="flex flex-col gap-y-12 lg:w-[90%]">
                <div className="text-4xl w-[70%] font-semibold">
                  {data.heading}
                  <HighlightText text={data.highlightText} />
                </div>
                <p className="text-richblack-200 font-sans text-[16px] font-medium">
                  {data.description}
                </p>
                <div className="w-fit">
                  <CTAButton active={true} linkto={data.BtnLink}>
                    {data.BtnText}
                  </CTAButton>
                </div>
              </div>
            ) : (
              <div className="flex flex-col p-10 gap-y-4">
                <h1 className="text-lg ">{data.heading}</h1>
                <p className="text-richblack-200 text-[16px] font-medium">
                  {data.description}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LearningGrid;
