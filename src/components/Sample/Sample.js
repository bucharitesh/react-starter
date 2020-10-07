//Sample components file
import React, { useContext } from "react";
import SampleContext from "../../context/actions/sample/SampleContext";

const Sample = () => {
  const sampleContext = useContext(SampleContext);

  return <h1>Sample</h1>;
};

export default Sample;
