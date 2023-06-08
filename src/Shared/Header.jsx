import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo-removebg-preview.png";
import useAuth from "../componenets/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut().then(() => {
      navigate("/login");
    });
  };

  const items = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      {/* {user && ( */}
      <>
        <li>
          <Link to="/classes">Classes</Link>
        </li>
        {user && (
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        )}
      </>

      <li>
        {user ? (
          <Link onClick={handleLogOut}>Logout</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-opacity-30 text-white bg-black">
      <div className="navbar-start md:ps-12">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow  rounded-box w-52 bg-black bg-opacity-30"
          >
            {items}
          </ul>
        </div>
        <a className="">
          <img className="h-16 " src={logo} alt="" />
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{items}</ul>
      </div>
      <div className="navbar-end md:pe-12">
        {user ? (
          <>
            {isHovered && <span>{user.displayName}</span>}
            <label
              title={user.displayName}
              tabIndex={0}
              className="btn ms-3 btn-ghost btn-circle avatar"
            >
              <div
                className="w-20  border rounded-full"
                onMouseEnter={() => setIsHovered(true)}
              >
                <img src={user.photoURL} />
              </div>
            </label>
          </>
        ) : (
          <Link to="/login" className="btn btn-outline btn-primary">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
