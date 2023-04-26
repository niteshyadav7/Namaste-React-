import React from "react";
import ReactDOM from "react-dom/client";

// components import React
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
root.render(<App />);
