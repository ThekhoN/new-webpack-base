import React, { Component } from "react";
import { render } from "react-dom";
import "../css/style.css";
import Test from "./components/test";

export default class Hello extends Component {
  render() {
    return (
      <div>
        <h2>Hello !!!</h2>
        <br />
        <Test />
      </div>
    );
  }
}

render(<Hello />, document.getElementById("root"));
