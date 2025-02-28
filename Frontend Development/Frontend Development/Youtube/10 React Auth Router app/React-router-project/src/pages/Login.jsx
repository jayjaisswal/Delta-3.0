import Template from "../components/Template";
import loginImg from "../assets/login.png";
function Login({setLoggedIn}) {
  return (
    <div>
      <Template
        title="Welcome Back"
        desc1="Build skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your career."
        image={loginImg}
        formType="login"
        setLoggedIn={setLoggedIn}
      ></Template>
    </div>
  );
}

export default Login;
