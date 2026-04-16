import React from "react";

export const ControlledComponents: React.FC = () => {
  const [inputValue, setInputValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h2>Controlled Component Example</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <p>You typed: {inputValue}</p>
    </div>
  );
};
