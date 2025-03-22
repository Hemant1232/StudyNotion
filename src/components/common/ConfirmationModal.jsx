import React from "react";
import { FaRegEdit } from "react-icons/fa";

const ConfirmationModal = ({ modalData }) => {
  return (
    <div>
      <div className="w-11/12 max-w-[350px] rounded-lg border border-richblack-400 bg-richblack-800 p-6 z-50 fixed left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2">
        <p className="text-2xl text-center font-semibold text-richblack-5">
          {modalData.text1}
        </p>
        <p className="mt-3 mb-5 leading-6 tracking-wider text-center text-richblack-200">
          {modalData.text2}
        </p>

        <div className="flex items-center justify-center  gap-4">
          <button
            onClick={modalData.btn1Handler}
            className="flex items-center text-richblack-900 gap-x-2 bg-yellow-50 cursor-pointer text-[17px] -px-2 md:text-lg md:px-5 py-2 text-sm rounded-md font-semibold"
          >
            <p className="">{modalData.btn1Text}</p>
            <FaRegEdit />
          </button>
          <button
            onClick={modalData.btn2Handler}
            className="flex items-center text-richblack-900 gap-x-2 bg-richblack-200 cursor-pointer text-[17px] px-3 md:text-lg md:px-5 py-2 text-sm rounded-md font-semibold"
          >
            <p className="">{modalData.btn2Text}</p>
          </button>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default ConfirmationModal;
