import * as React from "react";

import "./App.css";
import { Button, CssBaseline, ThemeProvider, Typography } from "@mui/material";
import theme from "./utilites/theme";
import Hero from "./components/Hero";
import About from "./components/About";
import Nav from "./components/Nav";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Nav />
      <Hero />
      {/* <About /> */}
      <Projects />
      <Experience />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
