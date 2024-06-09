import React from "react";
import ListView from "./AllCOmponents/ListView";
import Count from "./AllCOmponents/Count";
import LifecycleInFunctionComp from "./AllCOmponents/lifecycleInFunctionComp";

export default function App() {
  return (
    <div>
      <ListView />
      <Count />
      <LifecycleInFunctionComp />
    </div>
  );
}
