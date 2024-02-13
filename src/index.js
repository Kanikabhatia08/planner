import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); 
//root created for reactDOM takein from index.html in public folder
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
