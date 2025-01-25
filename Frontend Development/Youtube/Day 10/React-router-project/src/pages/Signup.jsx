import signupImg from "../assets/signup.png"
import Template from "../components/Template";
function Signup({setLoggedIn}) {
  return (
    <div>
      <Template
        title="Join the millions learning to code with StudyNotion for free"
        desc1="Build skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your career."
        image={signupImg}
        formType="signup"
        setLoggedIn={setLoggedIn}
      ></Template>
    </div>
  );
}

export default Signup;
