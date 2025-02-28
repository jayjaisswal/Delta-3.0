import "./App.css";
import Heading from "./components/heading";
import Item1 from "./components/item1";
import Item2 from "./components/Item2";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <center>
      <Heading></Heading>
      <div class="container text-center">
        <AddTodo></AddTodo>
        <Item1></Item1>
        <Item2></Item2>
      </div>
    </center>
  );
}

export default App;
