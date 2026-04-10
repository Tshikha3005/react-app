import React, { FC } from "react";
import "./add-button.css";

interface IAddButton {
  handleAddTodo: () => void;
}

export const AddButton: FC<IAddButton> = ({ handleAddTodo }) => {
  return (
    <button className="add-button" onClick={handleAddTodo}>
      Add
    </button>
  );
};
