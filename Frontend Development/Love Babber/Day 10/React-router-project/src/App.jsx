import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
