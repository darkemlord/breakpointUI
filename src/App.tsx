import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>BreakPointAPP</title>
      </Helmet>
      <MainRoutes />
    </HelmetProvider>
  );
}
export default App;
