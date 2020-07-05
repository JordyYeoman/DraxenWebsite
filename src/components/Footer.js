import React from "react";
import { motion } from "framer-motion";
import DraxenLogo from "../assets/img/DraxenLogo2.png";
import DraxenThumbsUp from "../assets/img/Dravenheadshot1.png";
const Footer = () => {
  return (
    <div className="Footer-Container">
      <div className="Footer-Column-Container">
        Learn
        <br></br>
        <div style={{ fontSize: "10px" }}>(Coming Soon)</div>
        <img
          className="FooterColumn1img"
          src={DraxenThumbsUp}
          alt="Draxen League of legends Logo"
        />
      </div>
      <div className="Footer-Column-Container">Snippets?</div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="Footer-Column-Container"
      >
        <img
          className="FooterColumn3logo"
          src={DraxenLogo}
          alt="Draxen League of legends Logo"
        />
      </motion.div>
      <div className="Footer-Column-Container">Socials</div>
      <div className="Footer-Column-Container">Donate</div>
    </div>
  );
};

export default Footer;
