import "./App.css";
import BharatClock from "./components/BharatClock";
import Discription from "./components/Discription";
import TimeandDate from "./components/TimeandDate";

function App() {
  return (
    <div>
      <center className="clock-center">
        <BharatClock></BharatClock>
        <Discription></Discription>
        <TimeandDate></TimeandDate>
      </center>
    </div>
  );
}

export default App;
