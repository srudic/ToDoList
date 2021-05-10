import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import style from "./Todo.module.css";

const Todo = (props) => {
  return (
    <div className={style.Todo}>
      <span style={{ textDecoration: props.todo.isDone ? "line-through" : "" }}>
        {props.todo.text}
      </span>
      <div className={style.Btns}>
        <div
          className={style.Check}
          onClick={() => props.markTodo(props.index)}
        >
          <FaCheck color={"white"} />
        </div>
        <div
          className={style.Remove}
          onClick={() => props.removeTodo(props.index)}
        >
          <FaTrashAlt color={"white"} />
        </div>
      </div>
    </div>
  );
};

export default Todo;
