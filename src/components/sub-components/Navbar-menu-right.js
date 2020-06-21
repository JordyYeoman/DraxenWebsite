import React from "react";
import { motion } from "framer-motion";
import { AiOutlineSearch } from "react-icons/ai";

const NavRight = () => {
  return (
    <div className="Navbar-Right-Container">
      <div className="searchButton">
        Search
        <motion.span
          animate={{ scale: 1.5, rotate: 180, opacity: 0 }}
          transition={{
            yoyo: Infinity,
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          _
        </motion.span>
        <AiOutlineSearch
          style={{
            fontSize: 18,
            verticalAlign: "middle",
            paddingLeft: 20,
            paddingRight: 30,
          }}
        />
      </div>
      <a href="#">
        <div className="button-container">Contact</div>
      </a>
    </div>
  );
};

export default NavRight;
