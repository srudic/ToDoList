import React, { useState } from "react";

import Todo from "./Todo/Todo";
import FormTodo from "./FormTodo/FormTodo";
import style from "./ToDoList.module.css";

const ToDoList = () => {
  const [todos, setTodos] = useState([
    { text: "This is a sampe todo", isDone: false },
  ]);
  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className={style.ToDoList}>
      <FormTodo addTodo={addTodo} />
      <div className={style.TodoItem}>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            markTodo={markTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
