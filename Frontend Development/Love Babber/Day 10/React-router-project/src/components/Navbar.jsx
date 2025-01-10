import { Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

import logo from "../assets/Logo.svg";
import "./Navbar.css";

function Navbar({ loggedIn, setLoggedIn }) {
  return (
    <div className="nav">
      <Link to="/">
        <img src={logo} alt="Logo" width={160} height={32} loading="lazy"></img>
      </Link>

      <nav>
        <ul className="nav">
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

      <div className="nav">
        {!loggedIn && (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
        {!loggedIn && (
          <Link to="/signup">
            <button>signup</button>
          </Link>
        )}
        {loggedIn && (
          <Link to="/">
            <button
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
            <button>Dashboard</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
