import React from "react";
import ReactDOM from "react-dom";
import "./styles/Generalstyles.scss";

import Title from "./components/Title";
ReactDOM.render(<Title />, document.getElementById("title"));

import Search from "./components/Search";
ReactDOM.render(<Search />, document.getElementById("search"));

import Popularcities from "./components/Popularcities";
ReactDOM.render(<Popularcities />, document.getElementById("popularcities"));

import Details from "./components/Details";
ReactDOM.render(<Details />, document.getElementById("details"));
