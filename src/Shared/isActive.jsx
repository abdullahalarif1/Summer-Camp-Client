import React from "react";
import { NavLink } from "react-router-dom";

const IsActive = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "text-error text-xs" : "text-xs")}
    >
      {children}
    </NavLink>
  );
};

export default IsActive;
