import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col overflow-y-auto ">
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}></Navbar>
      <Routes>
        <Route path="/" element={<Home loggedIn={loggedIn} />}></Route>
        <Route
          path="/login"
          element={<Login setLoggedIn={setLoggedIn} />}
        ></Route>
        <Route
          path="/signup"
          element={<Signup setLoggedIn={setLoggedIn} />}
        ></Route>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute loggedIn={loggedIn}>
              {" "}
              <Dashboard />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
