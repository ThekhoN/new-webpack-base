/*
function addAll() {
  return [...arguments].reduce((acc, num) => acc + num, 0);
}

const result = addAll(1, 2, 3, 4);
console.log("result: ", result);
*/

import React, { Component } from "react";
import { render } from "react-dom";
// import "../css/style.css";

export default class Hello extends Component {
  render() {
    return <h2>Hello !!!</h2>;
  }
}

render(<Hello />, document.getElementById("root"));
