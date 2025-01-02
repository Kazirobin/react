import React, { useState } from "react";
import data from "../assets/data.json";
import SingleQuestion from "./SingleQuestion";
const Questions = () => {
  // initialize all data in questions
  const [questions, setQuestions] = useState(data);
  //
  const [activeId, setActiveId] = useState(null);
  const toggleQuestion = (id) => {
    const newActiveId = activeId === id ? null : id;
    setActiveId(newActiveId);
    console.log(id);
  };
  return (
    <div>
      Questions
      {questions.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            {...question}
            activeId={activeId}
            toggleQuestion={toggleQuestion}
          />
        );
      })}
    </div>
  );
};

export default Questions;
