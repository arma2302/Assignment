import React, { useEffect, useState } from "react";

export default function LifecycleInFunctionComp() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    alert("you clicked the btn" + count + "times");
  }, [count]);
  return (
    <div>
      <p>
        By using useEffect, you tell React that your component needs to do something after render. React will remember the function you passed, and call it later after performing the DOM updates. In the real project, the useEffect hook
        usually used to wrap an API calling function.For the simple example, you can look at the codes below.
      </p>
      <button onClick={() => setCount(count + 1)}>ClickHere</button>
    </div>
  );
}
