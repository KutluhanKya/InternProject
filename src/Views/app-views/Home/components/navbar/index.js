import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "@react-icons/all-files/ai/AiFillHome";
import { FiLogOut } from "@react-icons/all-files/fi/FiLogOut";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="text">Okulistik</div>
      <div className="flex flex-row">
        {" "}
        <NavLink to={`/home`}>
          <div className=" m-3 hover:text-cyan-300">
            <AiFillHome size={33} />
          </div>
        </NavLink>
        <button className=" m-3 hover:text-white">
          {" "}
          <FiLogOut size={33} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
