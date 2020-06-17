import React from "react";
import Lines from "./components/lines";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Lines part="svg-LineOne" pathDelay={0.4} pathOffset={0.2} />
      <Lines part="svg-LineTwo" pathDelay={0.82} pathOffset={0.4} />
      <Lines part="svg-LineThree" pathDelay={0.6} pathOffset={0.8} />
      <Navbar />
      <Hero className="hero" />
      <div>Hello div</div>
      <footer>Hello footer</footer>
    </div>
  );
}

export default App;
