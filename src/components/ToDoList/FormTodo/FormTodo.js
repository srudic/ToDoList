import React, { useState } from "react";

import style from "./FormTodo.module.css";

const FormTodo = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  return (
    <div className={style.FormTodo}>
      <p>Add Todo</p>
      <div className={style.Item}>
        <input value={value} onChange={(e) => setValue(e.target.value)}></input>
        <div className={style.Button} onClick={handleSubmit}>
          Add
        </div>
      </div>
    </div>
  );
};

export default FormTodo;
