import { useState } from "react";
import {  toast } from "react-hot-toast";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { Link, useNavigate } from "react-router-dom";

function LoginForm({setLoggedIn}) {
  
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
    console.log("hello");
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>
          <p>
            Email Address<sup>*</sup>
          </p>
          <input
            required
            type="text"
            value={formData.email}
            onChange={changeHandler}
            name="email"
            placeholder="Enter email id"
          />
        </label>

        <label>
          <p>
            Password<sup>*</sup>
          </p>
          <input
            required
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={changeHandler}
            name="password"
            placeholder="Enter password"
          />

          <span onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>

          <Link to="#">
            <p>Forgot Password</p>
          </Link>
        </label>

        <button>Sign In</button>
      </form>
    </div>
  );
}

export default LoginForm;
