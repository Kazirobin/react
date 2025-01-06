import React, { useState } from "react";

import SingleQuestion from "./SingleQuestion";
import { questionData } from "../../assets/data";
const Questions = () => {
  // initialize all data in questions
  const [questions, setQuestions] = useState(questionData);
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
          <SingleQuestion key={question.id} {...question} activeId={activeId} toggleQuestion={toggleQuestion}/>
        );
      })}
    </div>
  );
};

export default Questions;
