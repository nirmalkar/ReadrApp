import { useState } from "react";

const useToggleState = (initVal) => {
  const [state, setState] = useState(initVal);
  const toggleState = () => {
    setState(!state);
  };
  return [state, toggleState];
};

export { useToggleState };
