import React, { useContext, useEffect } from "react";
import { CounterContext } from "./context/First";
const Test = () => {
  const { state, setState } = useContext(CounterContext);

  return (
    <div>
      <h1>{state}</h1>
    </div>
  );
};

export default Test;
