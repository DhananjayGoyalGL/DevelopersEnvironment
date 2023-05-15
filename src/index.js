import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import About from "./components/About";
import Contact from "./components/Contact";

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<Login />}></Route>
      <Route exact path="/home" element={<App />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);
