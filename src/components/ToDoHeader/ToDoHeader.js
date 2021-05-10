import React from "react";

import style from "./ToDoHeader.module.css";

const date = new Date();
const day = date.getDate();
const weekDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
][date.getDay()];
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
][date.getMonth()];

const ToDoHeader = () => {
  return (
    <div className={style.ToDoHeader}>
      <h1>{`${weekDay}, ${day}`}</h1>
      <p>{month}</p>
    </div>
  );
};

export default ToDoHeader;
