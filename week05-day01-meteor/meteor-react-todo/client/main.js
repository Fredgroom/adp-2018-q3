import React from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import App from "../imports/ui/containers/App";

import "./main.html";
import "./main.css";

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById("root"));
});