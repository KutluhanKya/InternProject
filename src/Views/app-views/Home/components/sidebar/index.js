import React, { useState } from "react";
import "./index.scss";
import { BiMenu } from "@react-icons/all-files/bi/BiMenu";
import { BiMenuAltRight } from "@react-icons/all-files/bi/BiMenuAltRight";
import { RiFilePaperFill } from "@react-icons/all-files/ri/RiFilePaperFill";
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  const closeSidebar = () => {
    setIsOpen(false);
  };
  const names = [
    {
      id: 1,
      name: "Değerlendiriciler",
      route: "instructors",
      icon: <FaUserAlt size={30} />,
    },
    {
      id: 2,
      name: "Sınavlar",
      route: "exams",
      icon: <RiFilePaperFill size={30} />,
    },
  ];

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button
        onClick={toggleSidebar}
        className={`toggle-btn ${isOpen && "  delay-100"}`}
      >
        {isOpen ? (
          <i>
            <BiMenuAltRight size={40} />
          </i>
        ) : (
          <i>
            <BiMenu size={40} />
          </i>
        )}
      </button>
      <div className="dot">
        {names.map((x, i) => {
          return (
            <NavLink key={x.id} to={`/${x.route}`} onClick={closeSidebar}>
              {" "}
              <div key={x.id} className={`name ${!isOpen && "scale-0"}`}>
                {} <span>{x.icon}</span>
                <span className="icon-text-spacing">{x.name}</span>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
