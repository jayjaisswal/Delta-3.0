// import { useState } from "react";
import reviews from "./data";
import Testimonials from "./components/Testimonials";
import "./App.css";

function App() {
  return (
    <div className="body">
      <div>
        <h1>Our Testimonials</h1>
      </div>
      <div className="ruler"></div>
      <div>
        <Testimonials reviews={reviews}></Testimonials>
      </div>
    </div>
  );
}

export default App;
