import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { resetPassword } from "../services/operations/authAPI";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const token = location.pathname.split("/").at(-1);

  const [formData, setformData] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      dispatch(
        resetPassword(
          formData.password,
          formData.confirmPassword,
          token,
          setresetComplete
        )
      );
    } else {
      alert("Passwords do not match");
    }
  };

  const handleOnChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const [resetComplete, setresetComplete] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="  mx-auto select-none ">
      <div className="mt-[25%] w-full">
        <h1 className="text-richblack-5 text-3xl font-bold mb-2 ">
          {!resetComplete ? "Choose a Password" : "Reset Complete"}
        </h1>
        <p className="text-richblack-200 mb-2 text-lg ">
          {!resetComplete
            ? "Almost done. Enter your new password and youre all set."
            : `All done! We have sent an email to ${"nn"} to confirm`}
        </p>
        <form onSubmit={handleOnSubmit}>
          {!resetComplete && (
            <div className="flex flex-col gap-y-6">
              <div>
                <label className="relative ">
                  <p className=" text-richblack-50 mb-1 mt-2 text-[16px]">
                    New Password <sup className="text-pink-200">*</sup>
                  </p>
                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    value={FormData.password}
                    name="password"
                    onChange={handleOnChange}
                    placeholder="Enter your password"
                    style={{
                      boxShadow: "inset 0px -2px 0px rgba(255, 255, 255, 0.18)",
                    }}
                    className="bg-richblack-800 outline-none w-full text-richblack-5 rounded-md p-[12px]"
                  />
                  <span
                    className="absolute right-3 cursor-pointer top-[60%] z-10"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? (
                      <AiOutlineEye
                        fontSize={24}
                        color="white"
                        fill="#AFB2BF"
                      />
                    ) : (
                      <AiOutlineEyeInvisible
                        fontSize={24}
                        color="white"
                        fill="#AFB2BF"
                      />
                    )}
                  </span>
                </label>
              </div>
              <div>
                <label className="relative">
                  <p className="text-richblack-50 text-[16px] mb-1 mt-1">
                    Confirm New Password <sup className="text-pink-200">*</sup>
                  </p>
                  <input
                    required
                    type={showConfirmPassword ? "text" : "password"}
                    value={FormData.ConfirmPassword}
                    name="confirmPassword"
                    onChange={handleOnChange}
                    placeholder="Re-Enter your password"
                    style={{
                      boxShadow: "inset 0px -2px 0px rgba(255, 255, 255, 0.18)",
                    }}
                    className="bg-richblack-800 outline-none p-[12px] w-full rounded-md text-richblack-5"
                  />
                  <span
                    className="absolute right-3 cursor-pointer top-[70%] z-10"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                  >
                    {showConfirmPassword ? (
                      <AiOutlineEye
                        fontSize={24}
                        color="white"
                        fill="#AFB2BF"
                      />
                    ) : (
                      <AiOutlineEyeInvisible
                        fontSize={24}
                        color="white"
                        fill="#AFB2BF"
                      />
                    )}
                  </span>
                </label>
              </div>
            </div>
          )}
          {!resetComplete ? (
            <button
              type="submit"
              className="mt-6 w-full rounded-[8px] text-semibold bg-yellow-50 py-[12px] px-[12px] font-medium text-richblack-900"
            >
              Reset Password
            </button>
          ) : (
            <Link to={"/login"}>
              <button className="mt-6 w-full rounded-[8px] bg-yellow-50 py-[12px] px-[12px] font-medium text-richblack-900">
                Return to login
              </button>
            </Link>
          )}
        </form>

        <div className="mt-6 flex items-center justify-between">
          <Link to={"/login"}>
            <p class="flex items-center gap-x-2 text-richblack-5">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
              </svg>{" "}
              Back To Login
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
