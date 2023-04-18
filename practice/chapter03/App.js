import React from "react";
import ReactDOM from "react-dom/client";

const name = "Demo";
const age = 18;
const hobby = "JavaScript";
const isMarried = false;

const Content = () => {
  return (
    <>
      <h2>{name}'s of Basic Info</h2>
      <p>My age is {age}</p>
      <p>I love {hobby}</p>
      <p>Am i Married?:{isMarried + ""}</p>
    </>
  );
};
const TempConverter=()=>{
    const ce=100;
    const convert=(c)=>{
        const ans=373+c;
        return ans;
    }
    return(
        <>
        <h2>Temperature Converter</h2>
        <p>The Temperature in Celsius:{ce} </p>
        <p>The Temperature in Kelvin:{convert(ce)}</p>
        </>
    )
}
const App = () => {
  return (
    <>
      <h1 style={{ color: "red", textAlign: "center" }}>Namaste React!</h1>
      <div className="flex">
      <Content />
      <TempConverter />
      </div>
    </>
  );
};
const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
root.render(<App />);
