import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { SiGoogleclassroom } from "react-icons/si";
import { AiOutlineMenuFold } from "react-icons/ai";
import { BsBuildingAdd } from "react-icons/bs";
import { MdClass } from "react-icons/md";
import { FaWallet, FaUsers, FaHome, FaChalkboardTeacher } from "react-icons/fa";
import useAdmin from "../../componenets/useAdminInstructor";
import useInstructor from "../../componenets/useInstructor";


const Dashboard = () => {
  
  // TODO
  // const isAdmin = true;
  // const isInstructor = true;

  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer-2"
          className="drawer-button btn btn-error bg-red-200 btn-lg border-2 me-auto lg:hidden sticky top-0  mt-2 "
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
                <NavLink to="/dashboard/manageUsers">
                  {" "}
                  <FaUsers></FaUsers> Manage Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageClasses">
                  <FaWallet></FaWallet> Manage Classes
                </NavLink>
              </li>
            </>
          ) : isInstructor ? (
            <>
              <li>
                <NavLink to="/dashboard/addClass"> <BsBuildingAdd></BsBuildingAdd> Add a Class</NavLink>
              </li>
              <li>
                <NavLink to="/myClass"><MdClass></MdClass> My Classes</NavLink>
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
            <NavLink to="/">
              <FaHome></FaHome>Home{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/instructors">
              <FaChalkboardTeacher></FaChalkboardTeacher>Instructors
            </NavLink>
          </li>
          <li>
            <NavLink to="/classes">
              <SiGoogleclassroom></SiGoogleclassroom>Classes
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
