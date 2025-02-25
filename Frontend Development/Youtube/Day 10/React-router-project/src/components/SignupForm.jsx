import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { ImPrevious } from "react-icons/im";

import { Link, useNavigate } from "react-router-dom";
function SignupForm({ setLoggedIn }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",


  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmPassword] = useState(false);
  const [accountType, setAccountType] = useState("student");
  const navigate = useNavigate();
  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  function submitHandler(event) {
    event.preventDefault();
    if (formData.password != formData.confirmPassword) {
      toast.error("Password do not match");
      return;
    }
    const finalData= {
      ...formData, accountType
    }
    setLoggedIn(true);
    toast.success("Account Created");
    navigate("/dashboard");
    console.log(finalData);
  }
  return (
    <div >
      {/* student-Instructor tab */}
      <div className="flex bg-richblack-800 p-2 my-4 gap-x-4 rounded-full max-w-max"> {/*max-w-max means jitna content h utna width*/ }
        <button onClick={()=>setAccountType("student")} className={`${accountType==="student" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}>Student</button>
        <button onClick={()=>setAccountType("instructor")}  className={`${accountType==="instructor" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}>Instructor</button> 
      </div>

      <form onSubmit={submitHandler}>
        <div className="flex justify-between gap-x-2  ">
          {/* first name and last name  */}
          <label className="w-full" htmlFor="">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">
              First Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              className="w-full bg-richblack-800 text-richblack-5 rounded-[0.5rem] p-[12px] "
              required
              type="text"
              value={formData.firstName}
              onChange={changeHandler}
              name="firstName"
              placeholder="Enter First Name"
            />
          </label>

          <label className="w-full" htmlFor="">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">
              Last Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              className="w-full bg-richblack-800 text-richblack-5 rounded-[0.5rem] p-[12px]  "
              type="text"
              value={formData.lastName}
              onChange={changeHandler}
              name="lastName"
              placeholder="Enter Last Name"
            />
          </label>
        </div>
        {/* Email */}
        <label htmlFor="">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] mt-4">
            Email<sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            className="w-full bg-richblack-800 text-richblack-5 rounded-[0.5rem] p-[12px] "
            type="email"
            value={formData.email}
            onChange={changeHandler}
            name="email"
            placeholder="Enter email"
          />
        </label>

        {/* create password and confirmed password */}
        <div className="flex gap-2  w-full">
          <label className="w-full relative" htmlFor="">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] mt-4">
              Create Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              className="w-full bg-richblack-800 text-richblack-5 rounded-[0.5rem] p-[12px] "
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={changeHandler}
              name="password"
              placeholder="Enter password"
            />
            <span
              className="absolute right-3 top-[55px] cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>

          <label className="w-full relative" htmlFor="">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] mt-4">
              Confirm Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              className="w-full bg-richblack-800 text-richblack-5 rounded-[0.5rem] p-[12px] "
              type={showConfirmPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={changeHandler}
              name="confirmPassword"
              placeholder="Confirm password"
            />
            <span
              className="absolute right-3 top-[55px] cursor-pointer"
              onClick={() => setConfirmPassword((prev) => !prev)}
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>
        <button className="bg-yellow-50 py-[8px] px-[12px] w-full font-medium text-richblack-900 rounded-[8px] mt-7 cursor-pointer ">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
