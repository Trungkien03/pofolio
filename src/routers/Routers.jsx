// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import Projects from "../pages/Projects/Projects";
import WorkExperiences from "../pages/WorkExperiences/WorkExperiences";
import "../App.css";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/work" element={<WorkExperiences />} />
      </Routes>
    </Router>
  );
};

export default Routers;
