import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main >
        <Home />
        <About />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
