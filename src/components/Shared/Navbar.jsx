import React, { useContext, useEffect, useState } from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
const Navbar = () => {
  const navRef = useRef();

  const { user, logOut } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handleLogOur = () => {
    logOut()
      .then(() => {
        return toast.success("User logout successfully");
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });
  };

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
	// let theme = document.getElementById("theme");
	
	const handleChange = (event) => {
		let type = event.target.value;
		console.log(type);
		let theme = document.getElementById("theme");
		theme.setAttribute("data-theme",type)

	}

  return (
    <header>
      <div>
        <Link to="/" className="flex items-center">
          <img className="w-12" src={logo} alt="" />
          <h3>Chef Hero</h3>
        </Link>
      </div>
      <nav id="sidebar" className="bg-slate-50" ref={navRef}>
        <NavLink to="/" className="">
          Home
        </NavLink>

        <Link onClick={() => changeTheme()} to="">
          Order Online
        </Link>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        {user ? (
          <Link onClick={handleLogOur} className="btn btn-info">
            <button>Logout</button>
          </Link>
        ) : (
          <Link to="/login" className="btn btn-info">
            <button>Login</button>
          </Link>
        )}

				{/* theme start  */}
        <select onChange={handleChange} className="select select-accent w-[20%] max-w-xs">
          <option disabled>
            Dark mode or light mode?
          </option>
          <option value='light'>Auto</option>
          <option value='cupcake'>Cupcake</option>
          <option value='autumn'>Autumn</option>
          <option value='cyberpunk'>Cyberpunk</option>
          <option value='valentine'>Valentine</option>
          <option value='lemonade'>Lemonade</option>
          <option value='aqua'>Aqua</option>
          <option value='winter'>Winter</option>
          <option value='retro'>Retro</option>

        </select>
				{/* theme end */}

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
      {error}
      <Toaster></Toaster>
    </header>
  );
};

export default Navbar;
