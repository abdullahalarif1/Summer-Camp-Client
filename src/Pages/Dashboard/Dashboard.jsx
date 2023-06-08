import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineMenuFold } from "react-icons/ai";

const Dashboard = () => {
  // TODO
  const isAdmin = true;
  const isInstructor = true;

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer-2"
          className="drawer-button btn btn-error btn-outline btn-lg border-2 me-auto lg:hidden fixed mt-2 right-4"
        >
          <AiOutlineMenuFold />
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}

          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/manageUsers">Manage Users</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageClasses">Manage Classes</NavLink>
              </li>
            </>
          ) : isInstructor ? (
            <>
              <li>
                <NavLink to="/addClass">Add a Class</NavLink>
              </li>
              <li>
                <NavLink to="/myClass">My Classes</NavLink>
              </li>
            </>
          ) : (
            <>
              {" "}
              <li>
                <NavLink>Sidebar Item 1</NavLink>
              </li>
              <li>
                <NavLink>Sidebar Item 2</NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/instructors">Instructors</NavLink>
          </li>
          <li>
            <NavLink to="/classes">Classes</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

