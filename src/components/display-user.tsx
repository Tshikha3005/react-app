import React from "react";

export const DisplayUser = ({ name }: { name: string }) => {
  console.log("DisplayUser rendered");
  return <h1>{name}</h1>;
};
