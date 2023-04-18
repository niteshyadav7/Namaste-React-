import React from "react";
import ReactDOM from "react-dom/client";

const Heading=()=>(<div>Namaste React!</div>)

const Fn=()=>{
    return(
        <>
        <Heading/>
        <h1>Hello Nitesh Yadav</h1>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Fn />);
