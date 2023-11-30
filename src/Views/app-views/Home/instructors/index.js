import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";

const Instructors = ({ instructors }) => {
  return (
    <div className="ins">
      {instructors.map((x, i) => {
        return (
          <NavLink to={`/instructors/${x.id}`}>
            {" "}
            <div className="names" key={x.id}>
              {x.name}
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Instructors;
