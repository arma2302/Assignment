import React, { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);
  return (
    <div className="wrapper">
      <h1>Create Increment decrement state change by button click?</h1>
      <h2>React Web App</h2>
      <div className="count-main">
        <h3>{count}</h3>

        <div className="btns">
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
      </div>{" "}
    </div>
  );
}
