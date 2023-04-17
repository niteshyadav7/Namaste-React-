import React from "react";
import ReactDOM from "react-dom/client";

/**
 * <div class='parent'>
 * <div class='child'>
 *<h1>This is the h1 tag</h1>
 *<h1>This is the h2 tag</h1>
 * </div>
 * </div>
 */

const first = React.createElement(
  "h1",
  { className: "bold" },
  "Namaste React !"
);
const second = React.createElement(
  "p",
  { className: "primary" },
  "This is the Namaste React !"
);
const parent = React.createElement(
  "div",
  { className: "parent" },
  React.createElement("div", { className: "child" }, [first, second])
);

const ele = document.getElementById("root");
const root = ReactDOM.createRoot(ele);
root.render(parent);
