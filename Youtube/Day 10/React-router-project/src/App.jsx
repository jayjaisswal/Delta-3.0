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
      {/* Navbar */}
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}></Navbar>

      {/* step 1->Routes step 2->Link tag*/}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn}/>}></Route>
        <Route path="/signup" element={<Signup setLoggedIn={setLoggedIn} />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
