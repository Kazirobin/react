import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SingleQuestion = ({ id, title, info, activeId, toggleQuestion }) => {
  const isActive = id === activeId;
  console.log(isActive)
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div>
      <h3>
        {title}
        <button onClick={() => toggleQuestion(id)}>
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </h3>
      {isActive && <p>{info}</p>}
    </div>
  );
};

export default SingleQuestion;