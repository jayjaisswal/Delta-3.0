import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { Toaster } from "react-hot-toast";
<<<<<<<< HEAD:Frontend Development/Frontend Development/Youtube/10 React Auth Router app/React-router-project/src/main.jsx
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter >
      <App />
      <Toaster></Toaster>
    </HashRouter>
  </React.StrictMode>
========
import './index.css';


ReactDOM.createRoot(document.getElementById("root")).render(
  
    <BrowserRouter>
      <App />
      <Toaster></Toaster>
    </BrowserRouter>
  
>>>>>>>> 769756be8c28ec382c68ff2e5e85d1999f55a032:Youtube/Day 10/React-router-project/src/main.jsx
);
