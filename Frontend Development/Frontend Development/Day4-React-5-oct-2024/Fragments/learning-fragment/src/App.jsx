import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import Container from "./Components/container";
import InputOrder from "./Components/InputOrder";
import { useState } from "react";

function App() {
  let [foodItems, setFoodItems] = useState(["Roti", "Dal", "Green Vegetable"]);

  const OrderInput = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMessage f={foodItems}></ErrorMessage>
        <InputOrder Inputordr={OrderInput}></InputOrder>

        <FoodItems f={foodItems}></FoodItems>
      </Container>

      {/* <Container>
        <p>Above Are the Healthy Food That is Must For All Human Beings</p>
      </Container> */}
    </>
  );
}

export default App;
