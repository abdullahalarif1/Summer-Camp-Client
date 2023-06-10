import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { SiGoogleclassroom } from "react-icons/si";
import { AiOutlineMenuFold, AiOutlineSelect } from "react-icons/ai";
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
    <div>
      <div className="drawer lg:drawer-open text-white">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content pb-[100vh] md:pb-0  bg-gradient-to-r from-black to-[#06213d]">
          <label
            htmlFor="my-drawer-2"
            className="drawer-button  btn bg-black text-white  btn-lg border me-auto lg:hidden sticky top-0  mt-2 "
          >
            <AiOutlineMenuFold />
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side   bg-gradient-to-r from-black to-[#06213d]">
          <label htmlFor="my-drawer-2" className="drawer-overlay "></label>
          <ul className="menu p-4 w-80 h-full from-black to-[#06213d]  border-r text-white">
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
                  <NavLink to="/dashboard/addClass">
                    {" "}
                    <BsBuildingAdd></BsBuildingAdd> Add a Class
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myClasses">
                    <MdClass></MdClass> My Classes
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                {" "}
                <li>
                  <NavLink to="/dashboard/mySelectedClass">
                    {" "}
                    <AiOutlineSelect></AiOutlineSelect>My Selected Class
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myEnrolledClasses">
                    <SiGoogleclassroom></SiGoogleclassroom> My Enrolled Classes
                  </NavLink>
                </li>
              </>
            )}

            <div className="border-b my-5 opacity-25"></div>
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
    </div>
  );
};

export default Dashboard;
