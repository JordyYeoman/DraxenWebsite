import React from "react";
import { motion } from "framer-motion";

const svgVariants = {
  initial: { pathOffset: 1 },
  animate: {
    pathOffset: 1,
    // rotate: 0,
    // transition: {
    //   duration: 1.5,
    //   type: "Inertia",
    //   stiffness: 300,
    //   damping: 20,
    //},
  },
};

const pathVariant1 = {
  initial: {
    opacity: 0,
    pathLength: 0,
    pathOffset: 0.2,
  },
  animate: {
    opacity: 1,
    pathLength: 1,
    pathOffset: 0,
    transition: {
      duration: 1,
      //ease: "easeInOut",
    },
  },
};

const Lines = (props) => {
  // Putting the variables inside the component to have access to props
  const pathVariant2 = {
    initial: {
      opacity: 0,
      pathLength: 0,
      pathOffset: props.pathOffset,
    },
    animate: {
      opacity: 1,
      pathLength: 1,
      pathOffset: 0,
      transition: {
        delay: props.pathDelay,
        duration: 1,
        //ease: "easeInOut",
      },
    },
  };

  return (
    <div className={`${props.part}`}>
      <motion.svg
        variants={svgVariants}
        initial="initial"
        animate="animate"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        // Viewbox values
        // viewBox= "min-x min-y width height"
        viewBox="0 0 351.812 3328.391"
      >
        <g id="Group_9" data-name="Group 9" transform="translate(-258 -82.109)">
          <motion.path
            id="Union_1"
            data-name="Union 1"
            variants={pathVariant2}
            d="M0,280V3328ZM351,0,0,280Z"
            transform="translate(258.5 82.5)"
            fill="rgba(0,0,0,0)"
            stroke="#fff"
            stroke-width="2"
          />
        </g>
      </motion.svg>
    </div>
  );
};

export default Lines;
