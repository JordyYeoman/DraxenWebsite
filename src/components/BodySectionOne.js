import React, { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
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
const variant0 = {
  initial: { right: -20, opacity: 0 },
  animate: {
    right: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 2,
    },
  },
};

const variant1 = {
  initial: { left: -20, opacity: 0 },
  animate: {
    left: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 1.5,
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
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const contentXOffset = useTransform(scrollYProgress, [0, 1], [200, 0]);

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
      if (scale.current > 0.6) {
        console.log("In viewport");
      } else {
        console.log("Not in viewport");
      }
    };
  }, []);

  console.log(offset);

  // if scrollY is > 0.6 (number can change, this
  // is just the value right now) -> change
  // animation state of variables from hidden to true

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
          {scale.current > 0.6 ? (
            <motion.p
              variants={variant2}
              initial="initial"
              animate="animate"
              className="titlePara"
            >
              Places to go,<br></br> me to see...
            </motion.p>
          ) : null}
        </div>
        <div className="BodSecOne-ContentContainer-TextLeft">
          <div className="paraCont">
            <span className="line"></span>
            <motion.p
              variants={variant1}
              initial="initial"
              animate={scale.current > 0.6 ? "animate" : null}
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
            <motion.p
              variants={variant0}
              initial="initial"
              animate={scale.current > 0.6 ? "animate" : null}
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
          </div>

          <motion.div
            style={{
              x: contentXOffset,
            }}
            className="BodSecOne-MainImage-Container"
          >
            <img
              src={dravenImage}
              alt="Champion Draven - League of legends"
              height="100%"
              width="100%"
              className="BodSecOne-MainImage"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BodySectionOne;
