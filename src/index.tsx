/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./app/styles/theme";
import { store } from "./app/store";
import App from "./App";
import "./index.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
