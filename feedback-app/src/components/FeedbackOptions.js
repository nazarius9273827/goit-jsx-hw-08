import React from "react";
import "./style.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="buttons">
      {options.map((option) => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
