// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import App from "../App";
import NotFound from "../pages/Notfound/NotFound";
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
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default Routers;
