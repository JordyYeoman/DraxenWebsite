import React from "react";
import { motion } from "framer-motion";
import ResponsivePlayer2 from "./responsive-player2";

const HeroWindow = (props) => {
  let container = null;

  if (props.isMobile) {
    container = {
      initial: { width: "95%", height: "2px", top: "35%" },
      animate: {
        height: "50%",
        top: "10%",
        transition: {
          duration: 1.5,
          delay: 2,
          when: "beforeChildren",
          staggerChildren: 0.5,
        },
      },
    };
  } else {
    container = {
      initial: { width: "50%", height: "2px", top: "45%" },
      animate: {
        height: "50%",
        top: "20%",
        transition: {
          duration: 1.5,
          delay: 2,
          when: "beforeChildren",
          staggerChildren: 0.5,
        },
      },
    };
  }

  const children = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={container}
      className="HeroWindow-Container"
    >
      <motion.div variants={children}>
        <ResponsivePlayer2 url="https://www.youtube.com/watch?v=DhkTYlQAUa8&t" />
      </motion.div>
    </motion.div>
  );
};

export default HeroWindow;
