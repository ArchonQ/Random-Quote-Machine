import React from "react";
import Button from "./Components/button";
import "./App.css";

function App() {
  const nextQuoteHandler = () => {
    console.log("hi");
  };
  return (
    <div className="App" id="quote-box">
      <Button buttonDisplayName="Next Quote" clickHandler={nextQuoteHandler} />
    </div>
  );
}

export default App;
