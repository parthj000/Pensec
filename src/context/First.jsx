import React, { createContext, useState } from "react";

// Create a new context
export const CounterContext = createContext();

// Context provider component
export const CounterProvider = ({ children }) => {
  const [state, setState] = useState("this");

  return (
    <CounterContext.Provider value={{ state, setState }}>
      {children}
    </CounterContext.Provider>
  );
};
