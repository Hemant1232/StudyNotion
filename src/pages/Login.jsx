import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import loginImg from "../assets/Images/login.webp";
import filterImg from "../assets/Images/frame.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../services/operations/authAPI";

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
const [showPassword, setShowPassword] = useState(false);


const { email, password } = formData;

const handleOnChange = (e) => {
  setFormData((prevData) => ({
    ...prevData,
    [e.target.name]: e.target.value,
  }))
}

const handleOnSubmit = (e) => {
  e.preventDefault()
  dispatch(login(email, password, navigate))
}

  return (
    <div className="mx-auto flex w-11/12 max-w-maxContent justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12">
      <div className="mx-auto w-11/12 max-w-[450px] md:mx-0">
        <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
        Welcome Back
        </h1>
        <p className="mt-4 text-[1.125rem] leading-[1.625rem] text-richblack-300 ">
          Build skills for today, tomorrow, and beyond.
        </p>
        <div className="font-edu-sa italic text-blue-100 font-bold">
          Education to future-proof your career.
        </div>

        <div>
          <form onSubmit={handleOnSubmit} 
            className=""
          >
            <div className="  mt-6 w-full flex flex-col gap-y-4 font-[550px]">
              {/* Email Address */}
              <label>
                <p className="mb-1 font-medium text-[0.875rem] leading-[1.375rem] text-richblack-5">
                  Email Address <sup className="text-pink-200">*</sup>
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
                  className="outline-none bg-richblack-800 placeholder:opacity-50 text-richblack-5 p-[12px] w-full rounded-[0.5rem]"
                />
              </label>

              {/* Passowrd */}
              <label className="relative ">
                <p className="mb-1 font-medium text-[0.875rem] leading-[1.375rem] text-richblack-5">
                  Password <sup className="text-pink-200">*</sup>
                </p>
                <input
                  required
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={password}
                  onChange={handleOnChange}
                  placeholder="Enter Password"
                  style={{
                    boxShadow: "inset 5px -5px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  className="outline-none bg-richblack-800 placeholder:opacity-50 text-richblack-5 p-[12px] w-full rounded-[0.5rem]"
                />
                <span 
                onClick={() => {setShowPassword((prev)=>!prev)}}
                className="absolute right-3 top-[38px] z-[10] cursor-pointer">
                {
                    showPassword ? (
                        <AiOutlineEye fontSize={24} color="#AFB2BF" />
                    ) : (
                        <AiOutlineEyeInvisible fontSize={24} color="#AFB2BF"/>
                    )
                }
                </span>
              </label>
              <Link to="/forgot-password" >
                <p className='text-blue-200 flex -mt-1 text-[12px] font-medium justify-end'>
                    Forget password
                </p>
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-yellow-50 rounded-[8px] w-full px-[12px] py-[8px] mt-10 text-richblack-900 font-medium "
            >
              Sign in
            </button>
          </form>
        </div>
      </div>

      <div className="relative  mx-auto w-11/12 max-w-[450px] md:mx-0">
        <img
          src={loginImg}
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
    </div>
  );
};

export default Login;
