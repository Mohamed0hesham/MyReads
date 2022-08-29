import React from "react";
import ReactDOM from "react-dom";
import "./Styles/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { BooksProvider } from "./Contexts/BooksContext";

ReactDOM.render(
  <BrowserRouter>
    <BooksProvider>
      <App />
    </BooksProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
