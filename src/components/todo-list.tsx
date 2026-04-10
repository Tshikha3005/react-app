import React, { FC } from "react";
import "./todo-list.css";

interface ITodoList {
  todos: string[];
  handleDeleteTodo: (index: number) => void;
}

export const TodoList: FC<ITodoList> = ({ todos, handleDeleteTodo }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        border: "1px solid #ddd",
        padding: "1rem",
        borderRadius: "4px",
      }}
    >
      {todos.map((todo, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            gap: "0.5rem",
          }}
        >
          <span className="todo">{todo}</span>
          <button
            className="delete-button"
            onClick={() => handleDeleteTodo(index)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
