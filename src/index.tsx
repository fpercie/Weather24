import React from "react";
import ReactDOM from "react-dom";
import "./styles/Generalstyles.scss";

import Title from "./components/Title";
ReactDOM.render(<Title />, document.getElementById("title"));

import Search from "./components/Search";
ReactDOM.render(<Search />, document.getElementById("search"));
