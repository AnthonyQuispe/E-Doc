import React from "react";
import { Routes, Route } from "react-router-dom";
import "./style/_global.scss";
import LandingPage from "./pages/LandingPage/LandingPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}
