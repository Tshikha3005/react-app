import React, { useState } from "react";
import { Navbar } from "./components/navigation/navbar.js";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
