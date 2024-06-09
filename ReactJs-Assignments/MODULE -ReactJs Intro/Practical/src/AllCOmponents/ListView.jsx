import React from "react";

export default function ListView() {
  const ListData = ["List Item 1", "List Item 2", "List Item 3", "List Item 4", "List Item 5"];
  return (
    <div className="wrapper">
      <h1>How to Create a List View in React Js?</h1>
      <div className="main">
        <h2>React Way to Render List View</h2>
        <ul className="myul">
          {ListData.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
