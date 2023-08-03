import React from "react";
import ReactDOM  from "react-dom/client";


const HaderComponent = () => (
        <h1> Hader component</h1>
    )


const root = ReactDOM.createRoot(document.getElementById("root"))
console.log("hi")
root.render(<HaderComponent/>);

