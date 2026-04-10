import React, { FC } from "react";

interface ITodoInput {
  todoText: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TodoInput: FC<ITodoInput> = ({ todoText, handleChange }) => {
  return (
    <input
      placeholder="Add a task"
      id="todo-input"
      value={todoText}
      onChange={handleChange}
      style={{
        flex: 1,
        padding: "0.5rem",
        borderRadius: "4px",
        border: "1px solid #ddd",
        outline: "none",
      }}
    />
  );
};
