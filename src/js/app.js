import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "../css/style.css";
import Container from "../js/components/container";

const App = () => (
  <Router>
    <Container />
  </Router>
);

render(<App />, document.getElementById("root"));
