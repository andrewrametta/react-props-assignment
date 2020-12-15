import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import STORE from "./STORE";

ReactDOM.render(<App Store={STORE} />, document.getElementById("root"));
