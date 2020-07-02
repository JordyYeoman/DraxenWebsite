import React from "react";
import Lines from "./components/lines";
import Hero from "./components/Hero";
import Modal from "./components/Modal";
import useModal from "./components/hooks/useModal";
import Navbar from "./components/Navbar";
import BodySectionOne from "./components/BodySectionOne";
import BodySectionTwo from "./components/BodySectionTwo";
import BodySectionThree from "./components/BodySectionThree";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const { isShowing, toggle } = useModal();
  return (
    <div className="App">
      <span className="backgroundImg">
        <Lines part="svg-LineOne" pathDelay={0.4} pathOffset={0.2} />
        <Lines part="svg-LineTwo" pathDelay={0.82} pathOffset={0.4} />
        <Lines part="svg-LineThree" pathDelay={0.6} pathOffset={0.8} />
        <Navbar />
        <button
          style={{ zIndex: 4, position: "absolute", left: 0 }}
          onClick={toggle}
        >
          Click for popup
        </button>
        <Modal isShowing={isShowing} hide={toggle} />
        <Hero className="hero" />
      </span>
      <BodySectionOne />
      <BodySectionTwo />
      <BodySectionThree />
      <Footer />
    </div>
  );
}

export default App;
