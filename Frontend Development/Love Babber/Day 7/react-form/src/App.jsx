import { useState } from "react";
import "./App.css";

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // function changeFirstNameHandler(event) {
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value)
  // }

  // function changeSecondNameHandler(event) {
  //   // console.log(event.target.value);
  //   setLastName(event.target.value)
  // }

  const [fromData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
  });
  // console.log(fromData);

  function changeHandler(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <div className="App">
      <form action="">
        <input
          onChange={changeHandler}
          type="text"
          placeholder="First Name"
          name="firstName"
          value={fromData.firstName}
        />
        <br /> <br />
        <input
          onChange={changeHandler}
          type="text"
          placeholder="Second Name"
          name="lastName"
          value={fromData.lastName}
        />
        <br /> <br />
        <input
          onChange={changeHandler}
          type="email"
          placeholder="Enter email"
          name="email"
          value={fromData.email}
        />
        <br /> <br />
        <textarea
          onChange={changeHandler}
          name="comments"
          placeholder="Enter comment"
          value={fromData.comments}
        ></textarea>  
      </form>
    </div>
  );
}

export default App;
