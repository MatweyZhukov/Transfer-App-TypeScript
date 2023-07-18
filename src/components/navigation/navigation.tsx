//Global
import { NavLink } from "react-router-dom";
import { FC } from "react";

//Styles
import "./navigation.css";

const Navigation: FC = () => {
  return (
    <div className="navigation">
      <div className="title">
        <p>Navigation</p>
      </div>
      <span>
        <NavLink
          style={({ isActive }) => ({
            textDecoration: isActive ? "underline" : "none",
          })}
          className={"link"}
          to={"/"}
        >
          Main
        </NavLink>
        /
        <NavLink
          style={({ isActive }) => ({
            textDecoration: isActive ? "underline" : "none",
          })}
          className={"link"}
          to={"/transfer"}
        >
          Transfer
        </NavLink>
      </span>
    </div>
  );
};

export default Navigation;
