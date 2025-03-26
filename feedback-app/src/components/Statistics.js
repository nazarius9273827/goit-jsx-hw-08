import React from "react";
import "./style.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className="statistics">
      <p>Добре: {good}</p>
      <p>Нейтрально: {neutral}</p>
      <p>Погано: {bad}</p>
      <p>Всього відгуків: {total}</p>
      <p>Позитивних відгуків: {positivePercentage}%</p>
    </div>
  );
};

export default Statistics;
