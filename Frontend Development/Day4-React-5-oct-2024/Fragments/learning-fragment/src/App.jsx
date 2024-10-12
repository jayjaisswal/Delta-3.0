import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";

function App() {
  // let foodItems = [];
  let foodItems = ["Roti", "Dal", "Green Vegetable", "Ghee", "sabaji"];

  return (
    <>
      <h1 className="food-heading">Healthy Food</h1>
      <ErrorMessage f={foodItems}></ErrorMessage>
      <FoodItems f={foodItems}></FoodItems>
    </>
  );
}

export default App;
