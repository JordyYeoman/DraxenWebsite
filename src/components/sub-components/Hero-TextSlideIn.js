import React from "react";
import { motion } from "framer-motion";

const HeroTextSlideIn = () => {
  // Add staggering effect to the children of the container
  const containerVariants = {
    before: {},
    after: { transition: { staggerChildren: 0.06 } },
  };

  // Variants for animating each letter
  const letterVariants = {
    before: {
      opacity: 0,
      x: 20,
      rotateY: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 16,
        stiffness: 200,
        duration: 0.4,
      },
    },
    after: {
      opacity: 1,
      x: 0,
      rotateY: [0, 0, 0, 0, 0, 180, 0],
      times: [0, 0, 0, 0, 0, 0.2, 1],
      transition: {
        damping: 16,
        stiffness: 400,
        duration: 1.04,
      },
    },
  };
  const string = Array.from("The KING");
  console.log(string);
  return (
    <motion.div>
      <motion.div
        center={"y"}
        height={26}
        width={"100%"}
        className="HeroTextSlideInContainer"
        background={""}
        style={{
          fontFamily: "Oxanium-Light",
          fontWeight: "bold",
          letterSpacing: "-0.04em",
          fontSize: 18,
          marginTop: -10,
          color: "#FFF",
          display: "flex", // Set the display value to flex
          justifyContent: "center", // Center all children elements on the x axis
        }}
        variants={containerVariants}
        initial={"before"}
        animate={"after"}
      >
        {string.map((letter, index) => (
          <motion.div
            key={index}
            custom={index}
            width={"auto"} // Set the width to the width of the letter
            height={26} // Set the height to the height of the text
            background={""}
            style={{ position: "relative" }} // Position elements
            variants={letterVariants}
          >
            {/* // Set any spaces to a non-breaking space */}
            {letter === " " ? "\u00A0" : letter}
          </motion.div>
        ))}
      </motion.div>
      <div className="HeroTextSlideInContainer2">
        <motion.span
          initial={{ width: 0, x: 30 }}
          animate={{ width: 30, x: 0 }}
          transition={{ duration: 0.75, delay: 1 }}
          className="Hero-whiteline"
        ></motion.span>
        <motion.span
          initial={{ width: 0, x: 15, height: 2 }}
          animate={{ width: 20, x: 0 }}
          transition={{ duration: 0.75, delay: 1.5 }}
          className="Hero-whiteline lineTwo"
        ></motion.span>
        <motion.span
          initial={{ width: 0, x: 15, height: 2 }}
          animate={{ width: 20, x: 0 }}
          transition={{ duration: 0.75, delay: 2 }}
          className="Hero-whiteline lineThree"
        ></motion.span>
      </div>
    </motion.div>
  );
};

export default HeroTextSlideIn;
