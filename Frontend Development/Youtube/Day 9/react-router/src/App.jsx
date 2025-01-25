// import { useState } from 'react'
import Home from "./components/Home";
import About from "./components/About";
import Labs from "./components/Labs";
import NotFound from "./components/NotFound";
import Support from "./components/support";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/labs">Labs</NavLink>
          </li>
          <li>
            <NavLink to="/support">Supports</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<MainHeader/>}>
         <Route index element={<Home/>}></Route> {/*  // default route  */}
          <Route path="/support" element={<Support></Support>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/labs" element={<Labs></Labs>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
