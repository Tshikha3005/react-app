import React, { FC, useRef } from "react";

export const TextInputWithFocusButton: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusOnInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleToggler = () => {
    console.log(inputRef.current);
    if (inputRef.current) {
      console.log(inputRef.current.style.display, "display");
      inputRef?.current?.style.display === "block" ? "inline" : "none";
    }
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <button onClick={handleToggler}>Toggle</button>
      <input style={{ display: "block" }} ref={inputRef} type="text" />
      <button onClick={focusOnInput}>Focus on input</button>
    </div>
  );
};
