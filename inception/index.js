/**
 * <div class='parent'>
 * <div class='child'>
 * <h1>this is tag1</h1>
 * <h1>this is tag2</h1>
 * </div>
 * </div>
 *
 *
 *
 *
 */

// const heading = React.createElement(
//   "h1",
//   { className: "header" },
//   "Namaste React!"
// );

// const para = React.createElement(
//   "p",
//   { className: "para" },
//   `I'm learning React by Akshay Saini.`
// );

// const frag = React.createElement("div", {
//   className: "div",
//   children: [heading, para],
// });
// ReactDOM.createRoot(document.getElementById("root")).render(frag);

// const parent = React.createElement("div", { className: "parent" }, [
//   React.createElement("div", { className: "child" }, [
//     React.createElement("h1", {}, "This is the Tag 1"),
//     React.createElement("h2", {}, "This is the Tag 1"),
//   ]),
//   React.createElement("div", { className: "child" }, [
//     React.createElement("h1", {}, "This is the Tag 1"),
//     React.createElement("h2", {}, "This is the Tag 1"),
//   ]),
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(parent);

import React from "react";
import ReactDOM from "react-dom/client"

const heading = document.createElement("h1");
heading.innerHTML = "Hello React ";
const root = document.getElementById("root");
root.appendChild(heading);
