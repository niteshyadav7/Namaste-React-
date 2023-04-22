import React from "react";
import ReactDOM from "react-dom/client";

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

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
