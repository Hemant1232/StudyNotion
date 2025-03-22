import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import signupImg from "../assets/Images/signup.webp";
import filterImg from "../assets/Images/frame.png";
import { ACCOUNT_TYPE } from "../utils/Constants";
import Tab from "../components/core/common/Tab";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSignupData } from "../slices/authSlice"
import {sendOtp} from '../services/operations/authAPI'
const SignUp = () => {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.STUDENT);
  
    const [formData, setFormData] = useState({
      firstName: "", 
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    
  const { firstName, lastName, email, password, confirmPassword } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords Do Not Match");
      return;
    }
    const signupData = {
      ...formData,
      accountType,
    };

    // Setting signup data to state
    // To be used after otp verification
     dispatch(setSignupData(signupData))
    // Send OTP to user for verification
    dispatch(sendOtp(formData.email, navigate))

    // Reset
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setAccountType(ACCOUNT_TYPE.STUDENT);
  };

  const {loading} = useSelector(state => state.auth)

  const tabData = [
    {
      id: 1,
      tabName: "Student",
      type: ACCOUNT_TYPE.STUDENT,
    },
    {
      id: 2,
      tabName: "Instructor",
      type: ACCOUNT_TYPE.INSTRUCTOR,
    },
  ];


  

  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
      {
        loading ? (<div className="custom-loader"></div>) : (<div className="mx-auto flex w-11/12 max-w-maxContent justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12">
          <div className="mx-auto w-11/12 max-w-[450px] md:mx-0">
            <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
              Join the millions learning to code with StudyNotion for free
            </h1>
            <p className="mt-4 text-[1.125rem] leading-[1.625rem] text-richblack-300 ">
              Build skills for today, tomorrow, and beyond.
            </p>
            <div className="font-edu-sa italic text-blue-100 font-bold">
              Education to future-proof your career.
            </div>
    
            <div>
              <Tab
                tabData={tabData}
                field={accountType}
                setField={setAccountType}
              />
              <form
                onSubmit={handleOnSubmit}
                className="text-white w-full flex flex-col gap-y-4"
              >
                <div className="flex gap-x-10">
                  {/* First Name */}
                  <label>
                    <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                      First Name <sup className="text-pink-200">*</sup>
                    </p>
                    <input
                      required
                      type="text"
                      name="firstName"
                      value={firstName}
                      onChange={handleOnChange}
                      placeholder="Enter first name"
                      style={{
                        boxShadow: "inset 5px -5px 0px rgba(255, 255, 255, 0.18)",
                      }}
                      className="bg-richblack-800 outline-none placeholder:opacity-50 text-richblack-5 p-[12px] w-full rounded-[0.5rem]"
                    />
                  </label>
    
                  {/* Last Name */}
                  <label>
                    <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                      Last Name <sup className="text-pink-200">*</sup>
                    </p>
                    <input
                      required
                      type="text"
                      name="lastName"
                      value={lastName}
                      onChange={handleOnChange}
                      placeholder="Enter last name"
                      style={{
                        boxShadow: "inset 5px -5px 0px rgba(255, 255, 255, 0.18)",
                      }}
                      className="bg-richblack-800 outline-none placeholder:opacity-50 text-richblack-5 p-[12px] w-full rounded-[0.5rem]"
                    />
                  </label>
                </div>
    
                {/* Email Address */}
                <label>
                  <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                    Email address <sup className="text-pink-200">*</sup>{" "}
                  </p>
                  <input
                    required
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleOnChange}
                    placeholder="Enter email address"
                    style={{
                      boxShadow: "inset 5px -5px 0px rgba(255, 255, 255, 0.18)",
                    }}
                    className="bg-richblack-800 outline-none placeholder:opacity-50 text-richblack-5 p-[12px] w-full rounded-[0.5rem]"
                  />
                </label>
    
                {/* Password and ConfirmPassword */}
                <div className="flex gap-x-10">
                  {/* Password */}
                  <label className="relative">
                    <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                      Password <sup className="text-pink-200">*</sup>{" "}
                    </p>
                    <input
                      required
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={password}
                      onChange={handleOnChange}
                      placeholder="Enter password"
                      style={{
                        boxShadow: "inset 5px -5px 0px rgba(255, 255, 255, 0.18)",
                      }}
                      className="bg-richblack-800 outline-none placeholder:opacity-50 text-richblack-5 p-[12px] w-full rounded-[0.5rem]"
                    />
                    <span 
                    onClick={() => {setShowPassword((prev)=>!prev)}}
                    className="absolute right-3 top-[38px] z-[10] cursor-pointer">
                    {
                        showPassword ? (
                            <AiOutlineEye fontSize={24} />
                        ) : (
                            <AiOutlineEyeInvisible fontSize={24} />
                        )
                    }
                    </span>
                  </label>
    
                  {/* Confirm Password */}
                  <label className="relative">
                    <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                      Confirm Password <sup className="text-pink-200">*</sup>{" "}
                    </p>
                    <input
                      required
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={handleOnChange}
                      placeholder="Confirm password"
                      style={{
                        boxShadow: "inset 5px -5px 0px rgba(255, 255, 255, 0.18)",
                      }}
                      className="bg-richblack-800 outline-none placeholder:opacity-50 text-richblack-5 p-[12px] w-full rounded-[0.5rem]"
                    />
                    <span
                    onClick={() => {setShowConfirmPassword((prev)=>!prev)}}               
                    className="absolute right-3 top-[38px] z-[10] cursor-pointer">
                    {
                        showConfirmPassword ? (
                            <AiOutlineEye fontSize={24}/>
                        ) : (
                            <AiOutlineEyeInvisible fontSize={24}/>
                        )
                    }
                    </span>
                  </label>
                </div>
    
                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-yellow-50 rounded-[8px] w-full px-[12px] py-[8px] mt-6 text-richblack-900 font-medium "
                >
                  Create Account
                </button>
              </form>
            </div>
          </div>
    
          <div className="relative  mx-auto w-11/12 max-w-[450px] md:mx-0">
            <img
              src={signupImg}
              alt="signUp"
              width={558}
              height={504}
              loading="lazy"
              className=" absolute z-20"
            />
            <img
              src={filterImg}
              alt="filter"
              width={558}
              height={504}
              className="absolute top-4 left-4 "
            />
          </div>
        </div>)
      }
    </div>
  )
};

export default SignUp;
