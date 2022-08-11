import React, { useState } from "react";
import "./App.css";
import Router from "./shared/router";

function App() {
  const [scroll, setScroll] = useState(0);
  function handleScroll(e) {
    setScroll(scroll + 1);
  }
  console.log(scroll);

  return (
    <div className='App' onScroll={handleScroll}>
      <Router />
    </div>
  );
}

export default App;
