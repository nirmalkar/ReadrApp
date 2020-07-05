import { useState } from "react";

export const useInputState = (initVal) => {
  const [state, setState] = useState(initVal);
  const handleInput = (val) => {
    setState(val);
  };
  return [state, handleInput];
};
