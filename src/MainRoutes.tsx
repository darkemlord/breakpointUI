import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AuthenticationContainer from "./app/containers/Auth";

const MainRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<AuthenticationContainer />} />
      </Routes>
    </Router>
  );
};

export default MainRoutes;
