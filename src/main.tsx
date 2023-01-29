import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { ThemeContext, ThemeProvider } from "styled-components";
import NavBar from "./components/navBar";
import "./index.css";
import Home from "./pages/home";
import LandingPage from "./pages/landingPage";
import { DarkTheme } from "./styles/darkTheme";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <ThemeProvider theme={DarkTheme}>
      <Home/>
    </ThemeProvider>
);
