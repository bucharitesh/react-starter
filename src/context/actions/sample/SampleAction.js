//Sample actions file

import React, { useReducer } from "react";
import SampleContext from "./SampleContext";
import SampleReducer from "../../reducers/sample/SampleReducer";

const SampleState = (props) => {
  const initialState = {
    //Define your initial state here
  };

  const [state, dispatch] = useReducer(SampleReducer, initialState);

  //Define your actions here

  return (
    <SampleContext.provider value={{}}>{props.children}</SampleContext.provider>
  );
};

export default SampleState;
