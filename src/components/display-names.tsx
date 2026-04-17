import React from "react";

export const DisplayNames = () => {
  const [names, setNames] = React.useState<string[]>([
    "Anil",
    "Sunil",
    "Kumar",
  ]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setNames([...names, e.target.value])}
      />
      {names.map((name, index) => {
        return <p key={index}>{name}</p>;
      })}
    </div>
  );
};
