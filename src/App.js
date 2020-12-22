import React, { useState } from "react";
import "./styles.css";

let text = "lol";
let color = "red";
let name = "sheshu";

export default function App() {
  const [likeCounter, setCounter] = useState(0);

  function liker() {
    let newLikeCounter = likeCounter + 1;
    setCounter(newLikeCounter);
  }

  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}> {text}</h1>
      <h2 style={{ backgroundColor: "yellow" }}> welcome {name} </h2>
      <button onClick={liker}>like</button>
      {likeCounter}
    </div>
  );
}
