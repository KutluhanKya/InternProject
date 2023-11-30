import React from "react";
import "./index.scss";
import { BiDotsVerticalRounded } from "@react-icons/all-files/bi/BiDotsVerticalRounded";

import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
import { RiFilePaper2Line } from "@react-icons/all-files/ri/RiFilePaper2Line";
import Chart from "./chart";

const Home = () => {
  return (
    <div className="home">
      {" "}
      <div className="first">
        {" "}
        <div className="box2">
          <div className="box1">
            <div className="inner1">
              <h1 className="title">Aktif Değerlendiriciler</h1>
              <span className="dot">
                <BiDotsVerticalRounded />
              </span>
            </div>
            <div className="data">
              <div>
                <FaUserAlt size={45} />
              </div>

              <span className="number"> 100.250</span>
            </div>
          </div>

          <div className="box1">
            <div className="inner1">
              <h1 className="title">Kontrol Edilen Sorular</h1>
              <span className="dot">
                <BiDotsVerticalRounded />
              </span>
            </div>
            <div className="data">
              <div>
                <RiFilePaper2Line size={45} />
              </div>

              <span className="number"> 100.250</span>
            </div>
          </div>
          <div className="box1">
            <div className="inner1">
              <h1 className="title">Kontrol Edilmeyen Sorular</h1>
              <span className="dot">
                <BiDotsVerticalRounded />
              </span>
            </div>
            <div className="data">
              {" "}
              <div>
                <RiFilePaper2Line size={45} />
              </div>
              <span className="number"> 12.123</span>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-6 p-10 bg-white border-2 rounded-lg">
        {" "}
        <Chart />
      </div>
    </div>
  );
};

export default Home;
