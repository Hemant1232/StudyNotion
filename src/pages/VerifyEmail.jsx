import React, { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiLoopLeftFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { sendOtp, signUp } from "../services/operations/authAPI";

const VerifyEmail = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { signupData } = useSelector((state) => state.auth);

  useEffect(() => { 
    if (!signupData) {
      navigate("/signup");
    }
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const {
      accountType,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = signupData;

    dispatch(
      signUp(
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
        navigate
      )
    );
  };
  return (
    <div className=" text-white min-h-[calc(100vh-3.5rem)] grid place-items-center">
      <div className=" max-w-[500px] p-4 lg:p-8">
        <h1 className="text-richblack-5 font-semibold mb-5 text-[1.875rem] leading-[2.375rem]">
          Verify Email
        </h1>
        <p className="text-[1.125rem] leading-[1.625rem] mb-4 text-richblack-100">
          A verification code has been sent to you. Enter the code below
        </p>
        <form onSubmit={handleOnSubmit}>
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            containerStyle={{
              justifyContent: "space-between",
            }}
            renderInput={(props) => (
              <input
                {...props}
                placeholder="-"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-[50px] lg:[60px] aspect-square bg-richblack-800 text-richblack-5  text-center border-0 rounded-[0.5rem] focus:border-0 focus:outline-2 focus:outline-yellow-50"
              />
            )}
          />
          <button
            className="w-full mb-5 bg-yellow-50 py-[12px] px-[12px] rounded-[8px] mt-6 leading-[1.625rem] text-[1.06rem] font-medium text-richblack-900"
            type="submit"
          >
            Verify Email
          </button>
        </form>
        <div className="flex items-center justify-between">
          <Link to="/signup" className="flex items-center justify-center gap-2">
            <MdOutlineKeyboardBackspace /> Back to Signup
          </Link>
          <button
            className="flex items-center gap-2 text-blue-100"
            onClick={() => dispatch(sendOtp(signupData.email, navigate))}
          >
            <RiLoopLeftFill /> Resend it
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
