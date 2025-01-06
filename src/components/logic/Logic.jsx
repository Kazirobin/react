import React, { useState } from "react";
import BookList from "../BookList";
import "./Logic.css";
import Books from "../data-crud/Books";

const Logic = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="logic-container">
      <button onClick={() => {setActive(!active);}}>Show</button>
      <div className={`content ${active ? "visible" : "hidden"}`}>
        {/* <BookList />
        <Books/> */}
        
      </div>
    </div>
  );
};

export const News = () => {
  return (
    <>
      <h1>hello news</h1>
    </>
  );
};

export default Logic;
