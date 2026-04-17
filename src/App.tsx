import React, { useCallback, useRef, useState } from "react";
import { Navbar } from "./components/navigation/navbar.js";
import { TextInputWithFocusButton } from "./components/textInputWithFocusButton.js";
import { StopWatch } from "./components/stop-watch.js";
import { ControlledComponents } from "./components/controlled-components.js";
import { UncontrolledComponents } from "./components/uncontrolled-components.js";
import { TestForwardRefComponent } from "./components/test-forward-ref-compoennt.js";
import { LoginForm } from "./components/login-form.js";
import { TestUseTransition } from "./components/test-use-transition.js";
import { SearchApp } from "./components/search-app.js";
import { UserName } from "./components/user-name.js";
import { AddUser } from "./components/add-user.js";
import { DisplayUser } from "./components/display-user.js";
import set from "../node_modules/@rc-component/util/es/utils/set";
import { UpdateObject } from "./components/update-object";
import { DisplayNames } from "./components/display-names.js";
import { TestUseActionState } from "./components/test-use-action-state.js";

function App() {
  const [count, setCount] = useState(0);
  console.log("App rendered");

  // fir lisfting state
  const [users, setUsers] = useState<string[]>([]);
  const add = (newName: string) => {
    setUsers((prevUsers) => [...prevUsers, newName]);
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const updateInput = () => {
    inputRef.current!.value = "Updated value";
    inputRef.current!.style.backgroundColor = "yellow";
    inputRef.current!.focus();
  };

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);
  return (
    <>
      {/* <Navbar />
      <TextInputWithFocusButton />
      <StopWatch />
      <ControlledComponents />
      <h1>Forward Ref</h1>
      <UncontrolledComponents />
      <TestForwardRefComponent ref={inputRef} label="Forward Ref Input" />
      <button onClick={updateInput}>Update Input</button> */}
      {/* <LoginForm /> */}
      {/* <TestUseTransition /> */}
      {/* <SearchApp /> */}
      {/* Memo and usecallback */}
      <button onClick={() => setCount((c) => c + 1)}>Re-render App</button>
      <UserName name="Shikha" fn={handleClick} />
      <p>App render count: {count}</p>
      {/* lifiting state uo */}
      <AddUser add={add} />
      {users.map((user, index) => (
        <DisplayUser key={index} name={user} />
      ))}
      {/* Update Object */}
      <UpdateObject />
      {/* Update Array */}
      <DisplayNames />
      {/* <TestUseActionState /> */}
      <TestUseActionState />
    </>
  );
}

export default App;
