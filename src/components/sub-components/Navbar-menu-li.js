import React, { useRef, useState, useEffect } from "react";
import { motion, useCycle } from "framer-motion";
import styled from "styled-components";

// Styled Component, moved underneath Navbar-Menu component
// to allow for state variables to be passed down as props
const NavbarMenuCircleLi1 = styled.li`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: ${(props) => props.rotateMenuPos[0].left};
  top: ${(props) => props.rotateMenuPos[0].top};
`;

const NavbarMenuCircleLi2 = styled.li.attrs((props) => ({}))`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: ${(props) => props.rotateMenuPos[1].left};
  top: ${(props) => props.rotateMenuPos[1].top};
`;

const NavbarMenuCircleLi3 = styled.li.attrs((props) => ({}))`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: ${(props) => props.rotateMenuPos[2].left};
  top: ${(props) => props.rotateMenuPos[2].top};
`;
const NavbarMenuCircleLi4 = styled.li.attrs((props) => ({}))`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: ${(props) => props.rotateMenuPos[3].left};
  top: ${(props) => props.rotateMenuPos[3].top};
`;

// Calculate Position of Circles
// function calcPos() {
//   if
// }

const NavbarMenuLi = (props) => {
  const menuVariants = {
    open: {
      opacity: 0,
      scale: 0,
      rotate: -45,
    },
    closed: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  //const [wRotation, setWRotation] = useState(90);

  const [isOpen, setIsOpen] = useState({
    whiteCircle: false,
    pinkCircle: false,
    orangeCircle: false,
    greenCircle: false,
  });

  // if (props.isShowing) {
  //   setIsOpen({
  //     whiteCircle: true,
  //     pinkCircle: false,
  //     orangeCircle: false,
  //     greenCircle: false,
  //   });
  // } else {
  //   setIsOpen({
  //     whiteCircle: false,
  //     pinkCircle: false,
  //     orangeCircle: false,
  //     greenCircle: false,
  //   });
  // }

  //const [isOpen, toggleOpen] = useCycle(false, true);
  const liContainerRef1 = useRef(0);
  const liContainerRef2 = useRef(0);
  const liContainerRef3 = useRef(0);
  const liContainerRef4 = useRef(0);

  // On component mount, collect the circle position data and update the state.
  useEffect(() => {
    console.log("Starting Application...");
  }, []);

  return (
    <>
      <NavbarMenuCircleLi1
        //ref={liContainerRef1Pos}
        ref={liContainerRef1}
        onClick={() => {
          console.log("White Clicked");
          props.setRotation(0);
          props.toggle();

          //reCalcPos();
          //   const { offsetTop } = props.inputRef.current;
          //   const { offsetLeft } = props.inputRef.current;
          //   const { clientHeight } = props.inputRef.current;
          //   const { clientTop } = props.inputRef.current;
          //   const { clientLeft } = props.inputRef.current;
          //getPosition();
        }}
        rotateMenuPos={props.rotateMenuPos}
      >
        <motion.svg
          width={`${props.circleProperties.width}px`}
          height={`${props.circleProperties.height}px`}
          viewBox="0 -20 25 60"
          title={`${props.rotateMenuPos[2].title}`}
          data-pos={props.rotateMenuPos[2].position}
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          //positionTransition
          //
          onClick={() => {
            setIsOpen({
              whiteCircle: !isOpen.whiteCircle,
              pinkCircle: false,
              orangeCircle: false,
              greenCircle: false,
            });
          }}
          //onTap={props.onTap}
        >
          <motion.path
            opacity={1}
            variants={menuVariants}
            initial={true}
            animate={isOpen.whiteCircle ? "open" : "closed"}
            stroke="white"
            d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"
            strokeWidth="3"
          />
          <motion.path
            variants={menuVariants}
            initial={false}
            animate={isOpen.whiteCircle ? "closed" : "open"}
            stroke="white"
            strokeWidth="3"
            d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
          />
        </motion.svg>

        {isOpen.whiteCircle ? (
          <motion.div
            initial={{ opacity: 0, marginTop: -10, marginLeft: -7 }}
            animate={{
              opacity: 1,

              marginTop: 4,
            }}
            transition={{
              duration: 0.5,
              delay: 0.25,
              ease: "easeIn",
            }}
          >
            Menu
          </motion.div>
        ) : (
          ""
        )}
      </NavbarMenuCircleLi1>
      <NavbarMenuCircleLi2
        //ref={liContainerRef2Pos}
        ref={liContainerRef2}
        onClick={() => {
          props.setRotation(-90);
          console.log("Pink Clicked");
          //   const { offsetTop } = props.inputRef.current;
          //   const { offsetLeft } = props.inputRef.current;
          //   const { clientHeight } = props.inputRef.current;
          //   const { clientTop } = props.inputRef.current;
          //   const { clientLeft } = props.inputRef.current;
          //getPosition();
          //props.setRotation(props.rotation - 90);
        }}
        rotateMenuPos={props.rotateMenuPos}
      >
        <motion.svg
          width={`${props.circleProperties.width}px`}
          height={`${props.circleProperties.height}px`}
          viewBox="0 -20 25 60"
          title={`${props.rotateMenuPos[1].title}`}
          data-pos={props.rotateMenuPos[1].position}
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          onClick={() => {
            setIsOpen({
              whiteCircle: false,
              pinkCircle: !isOpen.pinkCircle,
              orangeCircle: false,
              greenCircle: false,
            });
          }}
          //onTap={props.onTap}
        >
          <motion.path
            opacity={1}
            variants={menuVariants}
            initial={true}
            animate={isOpen.pinkCircle ? "open" : "closed"}
            stroke="white"
            strokeWidth="3"
            d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"
          />
          <motion.path
            variants={menuVariants}
            initial={false}
            animate={isOpen.pinkCircle ? "closed" : "open"}
            stroke="white"
            strokeWidth="3"
            d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
          />
        </motion.svg>
        {isOpen.pinkCircle ? (
          <motion.div
            initial={{
              opacity: 0,
              marginTop: -10,
              rotate: 90,
              marginTop: -18,
              marginLeft: -42,
            }}
            animate={{
              opacity: 1,
              marginLeft: -58,
            }}
            transition={{
              duration: 0.5,
              delay: 0.25,
              ease: "easeIn",
            }}
          >
            Facebook
          </motion.div>
        ) : (
          ""
        )}
      </NavbarMenuCircleLi2>
      <NavbarMenuCircleLi3
        //ref={liContainerRef3Pos}
        ref={liContainerRef3}
        onClick={() => {
          console.log("Orange Clicked");
          props.setRotation(180);
          //   const { offsetTop } = props.inputRef.current;
          //   const { offsetLeft } = props.inputRef.current;
          //   const { clientHeight } = props.inputRef.current;
          //   const { clientTop } = props.inputRef.current;
          //   const { clientLeft } = props.inputRef.current;
          //getPosition();
          //props.setRotation(props.rotation - 90);
        }}
        rotateMenuPos={props.rotateMenuPos}
      >
        <motion.svg
          width={`${props.circleProperties.width}px`}
          height={`${props.circleProperties.height}px`}
          viewBox="0 -20 25 60"
          title={`${props.rotateMenuPos[3].title}`}
          data-pos={props.rotateMenuPos[3].position}
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          onClick={() => {
            setIsOpen({
              whiteCircle: false,
              pinkCircle: false,
              orangeCircle: !isOpen.orangeCircle,
              greenCircle: false,
            });
          }}
          //onTap={props.onTap}
        >
          <motion.path
            opacity={1}
            variants={menuVariants}
            initial={true}
            animate={isOpen.orangeCircle ? "open" : "closed"}
            stroke="white"
            strokeWidth="3"
            d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"
          />
          <motion.path
            variants={menuVariants}
            initial={false}
            animate={isOpen.orangeCircle ? "closed" : "open"}
            stroke="white"
            strokeWidth="3"
            d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
          />
        </motion.svg>
        {isOpen.orangeCircle ? (
          <motion.div
            initial={{
              opacity: 0,
              marginTop: -10,
              rotate: 180,
              marginTop: -35,
              marginLeft: -27,
            }}
            animate={{
              opacity: 1,
              marginTop: -49,
            }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: "easeIn",
            }}
          >
            Contact
          </motion.div>
        ) : (
          ""
        )}
      </NavbarMenuCircleLi3>
      <NavbarMenuCircleLi4
        //ref={liContainerRef4Pos}
        ref={liContainerRef4}
        onClick={() => {
          console.log("Green Clicked");
          props.setRotation(90);
          //   const { offsetTop } = props.inputRef.current;
          //   const { offsetLeft } = props.inputRef.current;
          //   const { clientHeight } = props.inputRef.current;
          //   const { clientTop } = props.inputRef.current;
          //   const { clientLeft } = props.inputRef.current;
          //getPosition();
          //props.setRotation(props.rotation - 90);
        }}
        rotateMenuPos={props.rotateMenuPos}
      >
        <motion.svg
          width={`${props.circleProperties.width}px`}
          height={`${props.circleProperties.height}px`}
          viewBox="0 -20 25 60"
          title={`${props.rotateMenuPos[0].title}`}
          data-pos={props.rotateMenuPos[0].position}
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          onClick={() => {
            setIsOpen({
              whiteCircle: false,
              pinkCircle: false,
              orangeCircle: false,
              greenCircle: !isOpen.greenCircle,
            });
          }}
          //onTap={props.onTap}
        >
          <motion.path
            opacity={1}
            variants={menuVariants}
            initial={true}
            animate={isOpen.greenCircle ? "open" : "closed"}
            stroke="white"
            strokeWidth="3"
            d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"
          />

          <motion.path
            variants={menuVariants}
            initial={false}
            animate={isOpen.greenCircle ? "closed" : "open"}
            stroke="white"
            strokeWidth="3"
            d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
          />
        </motion.svg>
        {isOpen.greenCircle ? (
          <motion.div
            initial={{
              opacity: 0,
              marginTop: -10,
              rotate: 270,
              marginTop: -25,
              marginLeft: -14,
            }}
            animate={{
              opacity: 1,
              marginLeft: 2,
            }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: "easeIn",
            }}
          >
            Youtube
          </motion.div>
        ) : (
          ""
        )}
      </NavbarMenuCircleLi4>
    </>
  );
};

export default NavbarMenuLi;
