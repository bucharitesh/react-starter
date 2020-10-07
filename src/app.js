import React from "react";
import ReactDOM from "react-dom";
import "file-loader?name=.htaccess!./.htaccess"; // eslint-disable-line import/extensions

//Importing Actions file
import SampleState from "./context/actions/sample/SampleAction";

ReactDOM.render(
  <SampleState>
    <h1>hi</h1>
  </SampleState>,
  document.getElementById("root")
);
