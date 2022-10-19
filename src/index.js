import React from "react";
import ReactDOM from "react-dom/client";
import fbase from "./fbase";
import App from "./components/App";

console.log(fbase);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
