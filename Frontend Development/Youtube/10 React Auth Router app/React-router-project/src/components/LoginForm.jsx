import { useState } from "react";
import { toast } from "react-hot-toast";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { Link, useNavigate } from "react-router-dom";

function LoginForm({ setLoggedIn }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // function changeHandler(event) {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [event.target]: event.target.value,
  //   }));
  // }
  function changeHandler(event) {
    const { name, value } = event.target; // Destructure the name and value from the input
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Use the name attribute as the key and assign the input's value
    }));
  }
  function submitHandler(event) {
    event.preventDefault();
    setLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
    console.log(formData);
  }
  return (
    <div className="flex flex-col gap-y-4 mt-6">
      <form onSubmit={submitHandler}>
        <label >
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Email Address<sup className="text-pink-200">*</sup>
          </p>
          <input
            className="w-full bg-richblack-800 text-richblack-5 rounded-[0.5rem] p-[12px] "
            required
            type="text"
            value={formData.email}
            onChange={changeHandler}
            name="email"
            placeholder="Enter email id"
          />
        </label>

        <label className="w-full relative">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] mt-4">
            Password<sup className="text-pink-200">*</sup>
          </p>
          <input
            required
             className="w-full bg-richblack-800 text-richblack-5 rounded-[0.5rem] p-[12px]  "
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={changeHandler}
            name="password"
            placeholder="Enter password"
          />

          <span className="absolute right-3 top-[90px] cursor-pointer" onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" /> : <AiOutlineEye fontSize={24} fill="#AFB2BF" />}
          </span>

          <Link to="#">
            <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">Forgot Password</p>  {/* max-w-max ml-auto for left most and mx-auto se cemter me aayega */}
          </Link>
        </label>

        <button className="bg-yellow-50 py-[8px] px-[12px] w-full font-medium text-richblack-900 rounded-[8px] mt-7 cursor-pointer ">Sign In</button>
      </form>
    </div>
  );
}

export default LoginForm;
