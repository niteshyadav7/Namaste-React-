import React from "react";
import ReactDOM from "react-dom/client"


const heading = React.createElement(
  "h1",
  { className: "header" },
  "This is the namaste React!"
);

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
root.render(heading)
