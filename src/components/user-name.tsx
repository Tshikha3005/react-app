import React, { memo } from "react";

export const UserName = memo(
  ({ name, fn }: { name: string; fn: () => void }) => {
    console.log("UserName rendered");
    return (
      <>
        <h1>{name}</h1>
        <button onClick={fn}>Call Function</button>
      </>
    );
  },
);
