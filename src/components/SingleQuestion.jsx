import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SingleQuestion = ({ id, title, info, activeId, toggleQuestion }) => {
  const isActive = id === activeId;
  console.log(isActive);
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
    // AKfycbzV4Yb7dkEpqDErz85M4ww-3BLhWeDcXH4vzs2JROWIVVjpxA8EuPTLJycCOWbd0NPt
    // https://script.google.com/macros/s/AKfycbzV4Yb7dkEpqDErz85M4ww-3BLhWeDcXH4vzs2JROWIVVjpxA8EuPTLJycCOWbd0NPt/exec
  );
};

export default SingleQuestion;
