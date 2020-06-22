import React, { useRef, useState, useEffect } from "react";
import { motion, useCycle } from "framer-motion";

const TopNavBarVisual = () => {
  const svgPathPariant = {
    initial: {
      opacity: 0,
      pathLength: 0,
      pathOffset: 0.8,
    },
    animate: {
      opacity: 1,
      pathLength: 1,
      pathOffset: 0,
      transition: {
        delay: 0,
        duration: 2,
        //ease: "easeInOut",
      },
    },
  };
  const circlePathPariant = {
    initial: {
      opacity: 0,
      pathLength: 0,
      pathOffset: 1,
    },
    animate: {
      opacity: 1,
      pathLength: 1,
      pathOffset: 0,
    },
  };

  const lineStrokeWidth = 2;

  return (
    <div className="topNavBarVisual-container">
      <motion.svg
        variants={svgPathPariant}
        initial="initial"
        animate="animate"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="115%"
        viewBox="100 10 9 140.123"
      >
        <g transform="translate(-985.5 -29.5)">
          <motion.path
            transform="translate(-1585.5 161.317)"
            fill="none"
            stroke="#707070"
            d="M0 0 L2198 0"
            strokeWidth={lineStrokeWidth}
            variants={svgPathPariant}
            initial="initial"
            animate="animate"
          />
          {/* <circle
            cx="31.148"
            cy="31.148"
            r="31.148"
            transform="translate(128.283 54.704)"
            fill="none"
            stroke="#707070"
            strokeWidth={lineStrokeWidth}
          /> */}
          <motion.path
            variants={svgPathPariant}
            initial="initial"
            animate="animate"
            d="M0 0, L1082 0"
            transform="translate(408.5 161.317)"
            fill="none"
            stroke="#707070"
            strokeWidth={lineStrokeWidth}
          />
          <motion.circle
            variants={circlePathPariant}
            initial="initial"
            animate="animate"
            transition={{
              delay: 1,
              duration: 1.5,
              //ease: "easeInOut",
            }}
            cx="2.789"
            cy="2.789"
            r="2.789"
            transform="translate(1490.635 158.528)"
            fill="#fff"
            stroke="#707070"
            strokeWidth={lineStrokeWidth}
          />

          <motion.circle
            variants={circlePathPariant}
            initial="initial"
            animate="animate"
            transition={{
              delay: 3,
              duration: 1,
              //ease: "easeInOut",
            }}
            cx="5.579"
            cy="5.579"
            r="5.579"
            transform="translate(1500.862 155.738)"
            fill="none"
            stroke="#707070"
            strokeWidth={lineStrokeWidth}
          />
          <motion.circle
            variants={circlePathPariant}
            initial="initial"
            animate="animate"
            transition={{
              delay: 2.5,
              duration: 1,
              //ease: "easeInOut",
            }}
            cx="2.789"
            cy="2.789"
            r="2.789"
            transform="translate(1503.651 171.545)"
            fill="#fff"
            stroke="#707070"
            strokeWidth={lineStrokeWidth}
          />
          <motion.circle
            variants={circlePathPariant}
            initial="initial"
            animate="animate"
            transition={{
              delay: 1.5,
              duration: 1,
              //ease: "easeInOut",
            }}
            cx="2.789"
            cy="2.789"
            r="2.789"
            transform="translate(1503.651 145.511)"
            fill="#fff"
            stroke="#707070"
            strokeWidth={lineStrokeWidth}
          />
          <motion.circle
            variants={circlePathPariant}
            initial="initial"
            animate="animate"
            transition={{
              delay: 2,
              duration: 1,
              //ease: "easeInOut",
            }}
            cx="2.789"
            cy="2.789"
            r="2.789"
            transform="translate(1516.669 158.528)"
            fill="#fff"
            stroke="#707070"
            strokeWidth={lineStrokeWidth}
          />
          <motion.path
            variants={svgPathPariant}
            initial="initial"
            animate="animate"
            d="M0 0, L741 0"
            transform="translate(1522.5 161.317)"
            fill="none"
            stroke="#707070"
            strokeWidth={lineStrokeWidth}
          />
          <motion.path
            variants={svgPathPariant}
            initial="initial"
            animate="animate"
            y1="169.562"
            d="M0 0, L0 169.562"
            transform="translate(1506.441 -24.062)"
            fill="none"
            stroke="#707070"
            strokeWidth={lineStrokeWidth}
          />
        </g>
      </motion.svg>
    </div>
  );
};

export default TopNavBarVisual;
