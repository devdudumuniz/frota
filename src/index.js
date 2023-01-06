import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./login";
import "./style/App.less";


//função de rotas para app e login
let verificaRota = window.location.pathname;
let pathh =
  verificaRota == "/login" || verificaRota == "/" ? <Login /> : <App />;
//fim da função de rotas para app e login
//render sistema completo
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* aqui está o resultado do redirecionamento */}
    {pathh}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
