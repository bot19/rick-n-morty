import React, { useState } from "react";
import { Sidebar } from "./components/sidebar";
import { Page } from "./components/Page";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Sidebar />
      <Page />
    </>
  );
}

export default App;
