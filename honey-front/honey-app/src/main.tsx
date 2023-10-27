// import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App";
import "@styles/global.css";
import "@config/axios.config";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  // </React.StrictMode>,
);
