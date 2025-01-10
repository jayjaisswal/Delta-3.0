import { useState } from "react";
import { AiOutLineEye, AiOutLineEyeInvisible } from "react-icon/ai";
function LoginForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.value]: event.target.value,
    }));
  }
  return (
    <div>
      {/* student-Instructor tab */}
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form action="">
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
            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutLineEyeInvisible /> : <AiOutLineEye />}
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
              {showPassword ? <AiOutLineEyeInvisible /> : <AiOutLineEye />}
            </span>
          </label>
        </div>
        <button>
            Create Account
        </button>
      </form>
    </div>
  );
}
