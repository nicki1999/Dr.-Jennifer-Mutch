import ReactDOM from "react-dom/client";
import React from "react";
import Home from "./Home";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import KneeReplacement from "./KneeReplacement";
import "./CSS/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShoulderReplacement from "./ShoulderReplacement";

//use NavLink for navigation
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/KneeReplacement" element={<KneeReplacement />} />
        <Route path="/ShoulderReplacement" element={<ShoulderReplacement />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  </React.StrictMode>
);
