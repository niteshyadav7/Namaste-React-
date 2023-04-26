import React from "react";
import ReactDOM from "react-dom/client";

// components import React
import Header from "./component/Header";
import Body from "./component/Body";

const App = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
root.render(<App />);
