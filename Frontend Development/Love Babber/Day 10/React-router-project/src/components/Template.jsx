// import "../assets/login.png";
import frameImage from "../assets/frame.png";
function Template({ title, desc1, desc2, image, formtype, setIsLoggedIn }) {
  return (
    <div className="">
      <div>
        <h1>{title}</h1>
        <p>
          <span>{desc1}</span>
          <span>{desc2}</span>
        </p>

        {formtype === "signup" ? <SignupForm /> : <LoginForm />}

        <div>
          <div></div>
          <p>OR</p>
          <div></div>
        </div>

        <button>
          <p>Sign up with google</p>
        </button>
      </div>

      <div>
        <img src={frameImage}
            alt="Pattern"
            width={558}
            height={504}
            loading="lazy"/>


        <img src={image}
            alt="Pattern"
            width={558}
            height={490}
            loading="lazy"/>
        
      </div>
    </div>
  );
}

export default Template;
