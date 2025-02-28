import Card from "./Card";
import "./Testimonials.css";
import { useState } from "react";
function Testimonials({ reviews }) {
  const [index, setIndex] = useState(0);

  function leftShiftHandler() 
  {
    if (index-1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }
  function rightShiftHandler() {
    if (index+1 >= reviews.length) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
  }
  function surpriseHandler() {
   let randomIndex = Math.floor(Math.random() * reviews.length);
   setIndex(randomIndex);
  }

  return (
    <div className="Testimonials">
      <div >
        <Card person={reviews[index]}></Card>
      </div>
      <div>
        <button onClick={leftShiftHandler} className="btn">
          {"<"}
        </button>
        <button onClick={rightShiftHandler} id="rightbtn" className="btn">
          {">"}
        </button>
      </div>
      <div>
        <button onClick={surpriseHandler} className="bigbutton">
          Surprise Me
        </button>
      </div>
    </div>
  );
}
export default Testimonials;
