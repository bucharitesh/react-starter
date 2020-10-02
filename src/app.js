import React from "react";
import ReactDOM from "react-dom";

import "file-loader?name=.htaccess!./.htaccess"; // eslint-disable-line import/extensions

ReactDOM.render(<h1>hi</h1>, document.getElementById("root"));
