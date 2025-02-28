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

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: true, // true krne pe checked box pehle se hii tick rhega
    gender: "",
    favCar: "",
  });
  console.log(formData);

  // function changeHandler(event) {
  //   setFormData((prevFormData) => {
  //     return {
  //       ...prevFormData,
  //       [event.target.name]: event.target.value,
  //     };
  //   });
  // }
  function changeHandler(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input
          onChange={changeHandler}
          type="text"
          placeholder="First Name"
          name="firstName"
          value={formData.firstName}
        />
        <br /> <br />
        <input
          onChange={changeHandler}
          type="text"
          placeholder="Second Name"
          name="lastName"
          value={formData.lastName}
        />
        <br /> <br />
        <input
          onChange={changeHandler}
          type="email"
          placeholder="Enter email"
          name="email"
          value={formData.email}
        />
        <br /> <br />
        <textarea
          onChange={changeHandler}
          name="comments"
          placeholder="Enter comment"
          value={formData.comments}
        ></textarea>
        <br /> <br />
        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          id="isVisible"
          checked={formData.isVisible}
        />
        <label htmlFor="isVisible">Am i visible</label>
        <br /> <br />
        <fieldset>
          <legend> Select Gender :</legend>
          <label htmlFor="male">male :</label>
          <input
            type="radio"
            onChange={changeHandler}
            name="gender"
            value="male"
            id="male"
            // checked={formData.gender === "male"}
          />
          <label htmlFor="female">female :</label>
          <input
            type="radio"
            onChange={changeHandler}
            name="gender"
            value="female"
            id="female"
            // checked={formData.gender === "female"}
          />
          
        </fieldset>
        <label htmlFor="favCar">select Your fav Car </label>
        <select name="favCar" id="favCar" onChange={changeHandler}>
          <option value="Scarpio">Scarpio</option>
          <option value="Thar">Thar</option>
          <option value="Audi">Audi</option>
          <option value="Lamborgini">Lamborgini</option>
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
