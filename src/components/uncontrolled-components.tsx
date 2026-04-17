import React, { useRef } from "react";

export const UncontrolledComponents: React.FC = () => {
  const inputRef = useRef(null);
  const passRef = useRef(null);
  return (
    <form
      method="post"
      onSubmit={(e) => {
        e.preventDefault();
        // const name = document.querySelector("#name") as HTMLInputElement;
        // const password = document.querySelector(
        //   "#password"
        // ) as HTMLInputElement;
        const name = inputRef?.current as unknown as HTMLInputElement;
        const password = passRef?.current as unknown as HTMLInputElement;
        alert(`Name: ${name.value}, Password: ${password.value}`);
      }}
    >
      <h2>Uncontrolled Component Example</h2>
      <label>User name</label>
      <input
        name="name"
        id="name"
        ref={inputRef}
        type="text"
        placeholder="Enter name"
      />
      <label>Password</label>
      <input
        name="password"
        id="password"
        ref={passRef}
        type="password"
        placeholder="Enter password"
      />
      <button type="submit">Submit</button>
    </form>
  );
};
