import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";

const Exams = ({ exams }) => {
  return (
    <div className="exs">
      {exams.map((x, i) => {
        return (
          <NavLink to={`/exams/${x.id}`}>
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

export default Exams;
