import React from "react";
import "./index.scss";
import { useParams } from "react-router-dom";

const DetailsIns = ({ instructors, instructorsQuestions, exams }) => {
  const { id } = useParams();

  const instructor = instructors.find((ins) => ins.id === parseInt(id));
  const questions = instructorsQuestions.find((que) => que.id === parseInt(id));
  const exam = exams.find((ex) => ex.id === parseInt(id));

  if (instructor && instructor.name) {
    // instructor.name özelliğine güvenli bir şekilde erişim sağlayabilirsiniz.
    // ...
  } else {
    // Eğer öğretmen veya öğretmenin adı tanımsızsa, bu durumu ele alın.
    console.error("Öğretmen veya öğretmen adı tanımsız.");
  }
  console.log(instructor);

  return (
    <div key={instructor.id}>
      <div className="flex text-start justify-start items-start text-2xl m-9">
        <h1>Detay Ekranı</h1>
      </div>

      <div className="insDetails">
        <div>
          <div className="insName">{instructor.name}</div>

          <table className="table">
            <thead className="thead">
              <tr>
                <th> Sorular</th>
                <th>Sınavlar </th>
              </tr>
            </thead>
            <tbody className="body">
              <tr>
                <td className="questions-container">
                  {Array.isArray(questions.name) ? (
                    <ul className="questions-list">
                      {questions.name.map((name, index) => (
                        <li className="questions" key={index}>
                          {index + 1}. {name}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>{questions.name || "Questions not available."}</p>
                  )}
                </td>
                <td>
                  <div className="bg-blue-300 rounded-lg p-5 w-52 m-3 ">
                    {exam.name}
                  </div>{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DetailsIns;
