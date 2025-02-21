// import "../assets/login.png";
import frameImage from "../assets/frame.png";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
function Template({ title, desc1, desc2, image, formType, setLoggedIn }) {
  return (
    <div className="">
      <div>
        <h1>{title}</h1>
        <p>
          <span>{desc1}</span>
          <span>{desc2}</span>
        </p>

        {formType === "signup" ? (
          <SignupForm setLoggedIn={setLoggedIn} />
        ) : (
          <LoginForm setLoggedIn={setLoggedIn} />
        )}

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
        <img
          src={frameImage}
          alt="Pattern"
          width={558}
          height={504}
          loading="lazy"
        />

        <img
          src={image}
          alt="Pattern"
          width={558}
          height={490}
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Template;

// loading="lazy" in HTML and React
// The loading="lazy" attribute is used for lazy loading images,
// meaning the image loads only when it comes into view instead of loading immediately.
//  This improves performance and page speed by reducing unnecessary network requests.
//✅ The image won't load until the user scrolls down to it.
//✅ Saves bandwidth and improves page speed.
