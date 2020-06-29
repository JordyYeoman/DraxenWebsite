import React from "react";
import { motion } from "framer-motion";

const BodySectionTwo = () => {
  return (
    <div
      className="BodySectionTwo-Container"
      style={{
        height: "150vh",
        color: "lightblue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "5rem",
      }}
    >
      <div>Hello World I'm section two!</div>
    </div>
  );
};

export default BodySectionTwo;
