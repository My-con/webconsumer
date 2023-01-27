import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeContext, ThemeProvider } from "styled-components";
import NavBar from "./components/navBar";
import "./index.css";
import LandingPage from "./pages/landingPage";
import { DarkTheme } from "./styles/darkTheme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={DarkTheme}>
      <NavBar />
      <LandingPage />
    </ThemeProvider>
  </React.StrictMode>
);
