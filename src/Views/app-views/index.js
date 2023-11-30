import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Instructors from "./Home/instructors";
import Exams from "./Home/exams";
import Navbar from "./Home/components/navbar";
import Sidebar from "./Home/components/sidebar";
import DetailsExam from "./Home/exams/details";
import DetailsIns from "./Home/instructors/details";
import { GrFormClose } from "@react-icons/all-files/gr/GrFormClose";

const AppViews = () => {
  const close = [{ icon: <GrFormClose /> }];

  const instructorsQuestions = [
    {
      id: 1,
      name: [
        "asdjnasnjdasdasasdjnasnjdasdasasdjnasnjdasdas",
        "asdjnasnjdasdasasdjnasnjdasdasasdjnasnjdasdas",
        "asdjnasnjdasdasasdjnasnjdasdasasdjnasnjdasdas",
        "asdjnasnjdasdasasdjnasnjdasdasasdjnasnjdasdas",
        "asdjnasnjdasdasasdjnasnjdasdasasdjnasnjdasdas",
        "asdjnasnjdasdasasdjnasnjdasdasasdjnasnjdasdas",
        "asdjnasnjdasdasasdjnasnjdasdasasdjnasnjdasdas",
        "asdjnasnjdasdasasdjnasnjdasdasasdjnasnjdasdas",
        "asdjnasnjdasdasasdjnasnjdasdasasdjnasnjdasdas",
        "asdjnasnjdasdasasdjnasnjdasdasasdjnasnjdasdas",
      ],
    },
    {
      id: 2,
      name: [
        "asdjnasnjdasdasasdjnasnjdasdasasdjnasnjdasdas",
        "asdjnasnjdasdasasdjnasnjdasdasasdjnasnjdasdas",
        "asdjnasnjdasdasasdjnasnjdasdasasdjnasnjdasdas",
      ],
    },
    {
      id: 3,
      name: [
        "asdjnasnjdasdasasdjnasnjdasdasasdjnasnjdasdas",
        "asdjnasnjdasdasasdjnasnjdasdasasdjnasnjdasdas",
        "asdjnasnjdasdasasdjnasnjdasdasasdjnasnjdasdas",
        "asdjnasnjdasdasasdjnasnjdasdasasdjnasnjdasdas",
      ],
    },
    { id: 4, name: "asfasdfgsgfasdasd" },
    { id: 5, name: "adasdasda" },
    { id: 6, name: "MATdasdasdadBEG" },
    { id: 7, name: "fasdsadasdad" },
    { id: 8, name: "fasdsadasdad" },
    { id: 9, name: "fasdsadasdad" },
    { id: 10, name: "fasdsadasdad" },
  ];
  const exams = [
    { id: 1, name: "AAG" },
    { id: 2, name: "BTD" },
    { id: 3, name: "OKUBEG" },
    { id: 4, name: "FENBEG" },
    { id: 5, name: "MATBEG" },
    { id: 6, name: "MATBEG" },
    { id: 7, name: "MATBEG" },
    { id: 8, name: "MATBEG" },
    { id: 9, name: "MATBEG" },
    { id: 10, name: "MATBEG" },
  ];
  const instructors = [
    { id: 1, name: "Ahmet" },
    { id: 2, name: "Mehmet" },
    { id: 3, name: "Veli" },
    { id: 4, name: "İsmet" },
    { id: 5, name: "Hasan" },
    { id: 6, name: "Ali" },
    { id: 7, name: "Süleyman" },
    { id: 8, name: "Ahmet" },
    { id: 9, name: "Saltuk" },
    { id: 10, name: "Fatmva" },
  ];
  return (
    <div className="bg-[#badbdb]  h-screen">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route
          path="/instructors/"
          element={<Instructors instructors={instructors} />}
        />
        <Route path="/exams/" element={<Exams exams={exams} />} />
        <Route
          path="/exams/:id"
          element={
            <DetailsExam
              exams={exams}
              instructors={instructors}
              instructorsQuestions={instructorsQuestions}
              close={close}
            />
          }
        />
        <Route
          path="/instructors/:id"
          element={
            <DetailsIns
              instructors={instructors}
              instructorsQuestions={instructorsQuestions}
              exams={exams}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default AppViews;
