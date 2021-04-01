import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Amplify, { Auth } from "aws-amplify";
import config from "./aws-exports";
import { SnackbarProvider } from "notistack";

Amplify.configure(config);

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={5}>
      <App />
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
