import React from "react";
import { motion } from "framer-motion";
import dravenImage from "../assets/img/dravenleague2.jpeg";

const pathVariant2 = {
  initial: {
    opacity: 0,
    pathLength: 0,
    pathOffset: 1,
  },
  animate: {
    opacity: 1,
    pathLength: 1,
    pathOffset: 0,
    transition: {
      delay: 2,
      duration: 1,
      //ease: "easeInOut",
    },
  },
};

const variant2 = {
  initial: { top: -20, opacity: 0 },
  animate: {
    top: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
};

const BodySectionOne = () => {
  return (
    <div className="BodySectionOne-Container">
      <motion.div className="bodySectionLineTwo">
        <motion.svg
          xmlns="http://www.w3.org/2000/motion."
          width="100%"
          height="100%"
          viewBox="0 0 1 3048"
        >
          <motion.path
            y2="3048"
            variants={pathVariant2}
            initial="initial"
            animate="animate"
            d="M0 0, 0 3048"
            transform="translate(-159)"
            fill="none"
            stroke="#000"
            strokeWidth="3"
          />
        </motion.svg>
      </motion.div>
      <div className="BodSecOne-BkgroundTxt">
        DRAXEN<div className="BodSecOne-BkgroundTxt-Mini">GET SOME</div>
      </div>
      <div className="BodSecOne-ContentContainer">
        <div>
          <motion.p
            variants={variant2}
            initial="initial"
            animate="animate"
            className="titlePara"
          >
            Places to go,<br></br> me to see...
          </motion.p>
        </div>
        <div className="BodSecOne-ContentContainer-TextLeft">
          <div className="paraCont">
            <span className="line"></span>
            <motion.p
              variants={variant2}
              initial="initial"
              animate="animate"
              transition={{ delay: 2 }}
              className="text"
            >
              Well, the way they make shows is, they make one show. That show's
              called a pilot. Then they show that show to the people who make
              shows, and on the strength of that one show they decide if they're
              going to make more shows. Some pilots get picked and become
              television programs. Some don't, become nothing. She starred in
              one of the ones that became nothing. Now that there is the Tec-9,
              a crappy spray gun from South Miami. This gun is advertised as the
              most popular gun in American crime. Do you believe that shit? It
              actually says that in the little book that comes with it: the most
              popular gun in American crime. Like they're actually proud of that
              shit.
            </motion.p>
            <p className="text">
              Well, the way they make shows is, they make one show. That show's
              called a pilot. Then they show that show to the people who make
              shows, and on the strength of that one show they decide if they're
              going to make more shows. Some pilots get picked and become
              television programs. Some don't, become nothing. She starred in
              one of the ones that became nothing. Now that there is the Tec-9,
              a crappy spray gun from South Miami. This gun is advertised as the
              most popular gun in American crime. Do you believe that shit? It
              actually says that in the little book that comes with it: the most
              popular gun in American crime. Like they're actually proud of that
              shit.
            </p>
          </div>

          <div className="BodSecOne-MainImage-Container">
            <img
              src={dravenImage}
              alt="Champion Draven - League of legends"
              height="100%"
              width="100%"
              className="BodSecOne-MainImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodySectionOne;
