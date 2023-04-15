const heading = React.createElement(
  "h1",
  { className: "header" },
  "Namaste React!"
);

const para = React.createElement(
  "p",
  { className: "para" },
  `I'm learning React by Akshay Saini.`
);

const frag = React.createElement("div", {
  className: "div",
  children: [heading, para],
});
ReactDOM.createRoot(document.getElementById("root")).render(frag);
