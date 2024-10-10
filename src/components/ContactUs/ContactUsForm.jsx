import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import countryCode from "../../data/countrycode.json";

const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        phoneNo: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      setloading(true);
      const phoneNo = data.countryCode + "  " + data.phoneNo;
      const { firstName, lastName, email, message } = data;

      const res = await apiConnector("POST", contactusEndpoint.CONTACT_US_API, {
        firstName,
        lastName,
        email,
        message,
        phoneNo,
      });
      if (res.data.success === true) {
        toast.success("Message sent successfully");
      } else {
        toast.error("Something went wrong");
      }
      console.log("contact response", res);
      setloading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-10 text-richblack-50 tracking-wider text-[16px]">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-7">
        {/* First Name and Last Name */}
        <div className="flex flex-col lg:flex-row gap-x-5 gap-y-5">
          {/* firstName */}
          <div className="flex flex-col gap-y-2 lg:w-1/2 w-full">
            <label className="text-richblack-5 text-[14px]" htmlFor="firstname">
              First Name
            </label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Enter first name"
              {...register("firstname", { required: true })}
              style={{
                boxShadow: "inset 0px -2px 0px rgba(255, 255, 255, 0.2)",
              }}
              className="bg-richblack-700 text-richblack-5 rounded-md px-3 py-6 h-[35px] outline-none placeholder:text-richblack-400 placeholder:font-medium"
            />
            {errors.firstname && (
              <span className="text-yellow-25">Enter First Name</span>
            )}
          </div>
          {/* lastName */}
          <div className="flex flex-col gap-y-2 lg:w-1/2 w-full">
            <label className="text-richblack-5 text-[14px]" htmlFor="lastname">
              Last Name
            </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Enter last name"
              {...register("lastname", { required: true })}
              style={{
                boxShadow: "inset 0px -2px 0px rgba(255, 255, 255, 0.2)",
              }}
              className="bg-richblack-700 rounded-[7px] text-richblack-5 px-3 py-6 h-[35px] outline-none placeholder:text-richblack-400 placeholder:font-medium"
            />
            {errors.lastname && (
              <span className="text-yellow-25">Enter Last Name</span>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-y-2">
          <label className="text-richblack-5 text-[14px]" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email address"
            {...register("email", { required: true })}
            style={{ boxShadow: "inset 0px -2px 0px rgba(255, 255, 255, 0.2)" }}
            className="bg-richblack-700 placeholder:font-medium rounded-[7px] text-richblack-5 w-full px-3 py-6 h-[35px] outline-none placeholder:text-richblack-400"
          />
          {errors.email && <span className="text-yellow-25">Enter Email</span>}
        </div>

        {/* Phone Number */}
        <div className="flex flex-col gap-y-2">
          <label className="text-richblack-5" htmlFor="phoneNo">
            Phone Number
          </label>
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            {/* Country Code */}

            <select
              type="text"
              name="countryCode"
              id="countryCode"
              {...register("countryCode", { required: true })}
              className="bg-richblack-700 h-[47px] w-full lg:w-[85px] outline-none text-center text-richblack-50 pl-3 pr-3 rounded-[7px] border border-richblack-500 focus:border-richblack-300 focus:ring-2 focus:ring-richblack-300"
              style={{
                boxShadow: "inset 0px -2px 0px rgba(255, 255, 255, 0.2)",
              }}
            >
              {countryCode.map((data, index) => (
                <option
                  selected={data.code === "+91"}
                  className="bg-richblack-700 rounded-3xl text-richblack-50 py-2 px-3"
                  value={data.code}
                  key={index}
                >
                  {data.code} - {data.country}
                </option>
              ))}
            </select>

            {/* Phone Number Input */}
            <input
              type="tel"
              name="phoneNo"
              id="phonenumber"
              placeholder="12345 67890"
              style={{
                boxShadow: "inset 0px -2px 0px rgba(255, 255, 255, 0.2)",
              }}
              {...register("phoneNo", {
                required: {
                  value: true,
                  message: "Please enter phone Number *",
                },
                maxLength: {
                  value: 10,
                  message: "Enter a valid Phone Number *",
                },
                minLength: {
                  value: 8,
                  message: "Enter a valid Phone Number *",
                },
              })}
              className="bg-richblack-700 placeholder:font-medium rounded-[7px] text-richblack-5 px-3 py-6 h-[35px]
               outline-none placeholder:text-richblack-400 w-full"
            />
            {errors.phoneNo && (
              <span className="text-yellow-25">{errors.phoneNo.message}</span>
            )}
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-richblack-5">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="7"
            style={{ boxShadow: "inset 0px -2px 0px rgba(255, 255, 255, 0.2)" }}
            placeholder="Enter your message here"
            className="bg-richblack-700 rounded-[7px] placeholder:font-medium font-medium w-full text-richblack-5 pl-3 pt-3 outline-none placeholder:text-richblack-400"
            {...register("message", { required: true })}
          />
          {errors.message && (
            <span className="text-yellow-25">Enter your message *</span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="rounded-md bg-yellow-50 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] transition-all duration-200 hover:scale-95 hover:shadow-none disabled:bg-richblack-500 sm:text-[16px]"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUsForm;
