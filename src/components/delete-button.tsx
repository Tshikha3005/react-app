import React from "react";

export const DeleteButton = () => {
  return (
    <button
      className="delete-button"
      onClick={() => {
        console.log("Delete button clicked");
      }}
    >
      Delete
    </button>
  );
};
