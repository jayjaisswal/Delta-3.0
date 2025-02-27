// import "../assets/login.png";
import frameImage from "../assets/frame.png";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { FcGoogle } from "react-icons/fc";
function Template({ title, desc1, desc2, image, formType, setLoggedIn }) {
  return (
    <div className="justify-between flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0">
      <div className="w-11/12 max-w-[455px]">
        <div className=" text-richblack-5 font-semibold text-[1.875rem] w-full">
          {title}
        </div>
        <p className="text-[1.125rem] leading[1.625rem] mt-4">
          {" "}
          {/* leading[1.625rem] for line hight */}
          <span className="text-richblack-100">{desc1}</span>
          <br />
          <span className="text-blue-100 italic">{desc2}</span>
        </p>

        {formType === "signup" ? (
          <SignupForm setLoggedIn={setLoggedIn} />
        ) : (
          <LoginForm setLoggedIn={setLoggedIn} />
        )}

        <div className="flex w-full items-center my-4 gap-x-2">
          <div className="w-full h-[1px] bg-richblack-700"></div>
          <p className=" text-richblack-700 leading-[1.375rem]">OR</p>
          <div className="w-full h-[1px] bg-richblack-700"></div>
        </div>

        <button className="flex w-full justify-center cursor-pointer items-center gap-x-2 mt-6  rounded py-[8px] px-[12px] border border-gray-700 text-richblack-100">
          <FcGoogle />
          <p>Sign up with google</p>
        </button>
      </div>

      <div className="relative w-11/12 max-w-[450px]">
        <img
          src={frameImage}
          alt="Pattern"
          width={558}
          height={504}
          loading="lazy"
        />

        <img
          src={image}
          alt="Student"
          width={558}
          height={490}
          loading="lazy"
          className="absolute -top-4 right-4"
        />
      </div>
    </div>
  );
}

export default Template;
