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
  const [showPassword1, setShowPassword1] = useState(false);
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
    setLoggedIn(true);
    toast.success("Account Created");
    navigate("/dashboard");
  }
  return (
    <div >
      {/* student-Instructor tab */}
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>
        <div>
          {/* first name and last name  */}
          <label htmlFor="">
            <p>
              First Name<sup>*</sup>
            </p>
            <input
              required
              type="text"
              value={formData.firstName}
              onChange={changeHandler}
              name="firstName"
              placeholder="Enter First Name"
            />
          </label>

          <label htmlFor="">
            <p>
              Last Name<sup>*</sup>
            </p>
            <input
              required
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
          <p>
            Email<sup>*</sup>
          </p>
          <input
            required
            type="email"
            value={formData.email}
            onChange={changeHandler}
            name="email"
            placeholder="Enter email"
          />
        </label>

        {/* create password and confirmed password */}
        <div>
          <label htmlFor="">
            <p>
              Create Password<sup>*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={changeHandler}
              name="password"
              placeholder="Enter password"
            />
            <span onClick={() => setShowPassword1((prev) => !prev)}>
              {showPassword1 ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>

          <label htmlFor="">
            <p>
              Confirm Password<sup>*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={changeHandler}
              name="confirmPassword"
              placeholder="Confirm password"
            />
            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
        </div>
        <button>Create Account</button>
      </form>
    </div>
  );
}

export default SignupForm;
