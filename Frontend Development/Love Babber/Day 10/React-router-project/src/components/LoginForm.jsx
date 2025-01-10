import { useState } from "react";
import { AiOutLineEye, AiOutLineEyeInvisible } from "react-icon/ai";
import { ImPrevious } from "react-icons/im";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      <form action="">
        <label htmlFor="">
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

        <label htmlFor="">
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
            {showPassword ? <AiOutLineEyeInvisible /> : <AiOutLineEye />}
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
