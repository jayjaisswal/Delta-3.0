import { Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";


import LOGOO from "../assets/LOGOO.png";

function Navbar({ loggedIn, setLoggedIn }) {
  return (
<<<<<<<< HEAD:Frontend Development/Frontend Development/Youtube/10 React Auth Router app/React-router-project/src/components/Navbar.jsx
    <div className="flex text-richblack-100  items-center w-11/12 max-w-[1160px] py-4 mx-auto  justify-between">
      <Link to="/">
        <img className="mt-5" src={LOGOO} alt="Logo" width={160} height={32} loading="lazy"></img>
========
    <div className="flex justify-evenly">
      <Link to="/">
        <img src={logo} alt="Logo" width={160} height={32} loading="lazy"></img>
        {/* //  loading="lazy" means */}
>>>>>>>> 769756be8c28ec382c68ff2e5e85d1999f55a032:Youtube/Day 10/React-router-project/src/components/Navbar.jsx
      </Link>

      {/* Home, About, Contact */}
      <nav>
<<<<<<<< HEAD:Frontend Development/Frontend Development/Youtube/10 React Auth Router app/React-router-project/src/components/Navbar.jsx
        <ul className="flex gap-x-6">
========
        <ul className="flex gap-3">
>>>>>>>> 769756be8c28ec382c68ff2e5e85d1999f55a032:Youtube/Day 10/React-router-project/src/components/Navbar.jsx
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>

<<<<<<<< HEAD:Frontend Development/Frontend Development/Youtube/10 React Auth Router app/React-router-project/src/components/Navbar.jsx

    {/* login signup buttons */}
      <div className="flex gap-4 items-center ">
========
      {/* Buttons --> Login , Singup, Logout Dashboard
          If !loggedIn is true, the right-hand side (<Link>...</Link>) renders.
          If !loggedIn is false, nothing is rendered. */}
      <div className="flex ml-3 gap-3">
>>>>>>>> 769756be8c28ec382c68ff2e5e85d1999f55a032:Youtube/Day 10/React-router-project/src/components/Navbar.jsx
        {!loggedIn && (
          <Link to="/login">
            <button className="cursor-pointer bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Login</button>
          </Link> 
          //    border-richblack-700
        )}
        {!loggedIn && (
          <Link to="/signup">
            <button className="cursor-pointer bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">signup</button>
          </Link>
        )}
        {loggedIn && (
          <Link to="/">
            <button
              className="cursor-pointer bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700"
              onClick={() => {
                setLoggedIn(false);
                toast.success("Logged out");
              }}
            >
              logout
            </button>
          </Link>
        )}
        {loggedIn && (
          <Link to="/dashboard">
            <button  className="cursor-pointer bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Dashboard</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
