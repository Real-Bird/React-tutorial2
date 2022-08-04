import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Context from "./context";
import Home from "./Home";
import Navigation from "./Navication";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="context" element={<Context />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
