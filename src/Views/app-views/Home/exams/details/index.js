import { useState } from "react";

import "./index.scss";
import { useParams } from "react-router-dom";

const DetailsExam = ({ exams, instructors, instructorsQuestions }) => {
  const { id } = useParams();

  const exam = exams.find((exs) => exs.id === parseInt(id));
  const questions = instructorsQuestions.find((que) => que.id === parseInt(id));
  const instructor = instructors.find((ins) => ins.id === parseInt(id));

  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      const newTag = inputValue.trim();

      setTags([...tags, newTag]);

      setInputValue("");
    }
  };

  const handleTagRemove = (tagToRemove) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(updatedTags);
    setTags(updatedTags);
  };

  return (
    <div key={exam.id}>
      <div className="flex text-center justify-center   items-center text-blue-500 text-4xl m-9">
        <h1>{exam.name}</h1>
      </div>

      <div className="exsDetails">
        <div>
          <table className="table">
            <thead className="thead">
              <tr>
                <th> Sorular</th>
                <th>Atanan Değerlendiriciler </th>
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
                    {instructor.name}
                  </div>{" "}
                  <div className="tags">
                    {tags.map((tag, index) => (
                      <div key={index} className="tag">
                        {tag}
                        <span
                          className="cross"
                          onClick={() => handleTagRemove(tag)}
                        >
                          x
                        </span>
                      </div>
                    ))}
                  </div>
                  <input
                    className="input"
                    type="text"
                    placeholder="Değerlendirici eklemek için isim giriniz"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyPress={handleInputKeyPress}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DetailsExam;
