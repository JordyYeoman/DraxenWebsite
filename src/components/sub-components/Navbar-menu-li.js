import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
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

const NavbarMenuLi = (props) => {
  const liContainerRef1 = useRef(0);
  const liContainerRef2 = useRef(0);
  const liContainerRef3 = useRef(0);
  const liContainerRef4 = useRef(0);

  const [circlePos, setCirclePos] = useState(0);

  return (
    <>
      <NavbarMenuCircleLi1
        ref={liContainerRef1}
        onClick={() => {
          //   const { offsetTop } = props.inputRef.current;
          //   const { offsetLeft } = props.inputRef.current;
          //   const { clientHeight } = props.inputRef.current;
          //   const { clientTop } = props.inputRef.current;
          //   const { clientLeft } = props.inputRef.current;
          const input = liContainerRef1.current.getBoundingClientRect();
          const posX = input.x;
          const posY = input.y;
          console.log("WhiteX:  " + posX, "WhiteY:  " + posY);
          //getPosition();
          //props.setRotation(props.rotation - 90);
        }}
        rotateMenuPos={props.rotateMenuPos}
      >
        <motion.svg
          width={`${props.circleProperties.width}px`}
          height={`${props.circleProperties.height}px`}
          viewBox="0 0 400 400"
          title={`${props.rotateMenuPos[2].title}`}
          data-pos={props.rotateMenuPos[2].position}
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          //positionTransition
          onTap={props.onTap}
        >
          <circle
            cx="400"
            cy="250"
            r="100"
            fill="none"
            stroke="white"
            strokeWidth="50"
          />
        </motion.svg>
      </NavbarMenuCircleLi1>
      <NavbarMenuCircleLi2
        ref={liContainerRef2}
        onClick={() => {
          //   const { offsetTop } = props.inputRef.current;
          //   const { offsetLeft } = props.inputRef.current;
          //   const { clientHeight } = props.inputRef.current;
          //   const { clientTop } = props.inputRef.current;
          //   const { clientLeft } = props.inputRef.current;
          const input = liContainerRef2.current.getBoundingClientRect();
          const posX = input.x;
          const posY = input.y;
          console.log("PinkX:  " + posX, "PinkY:  " + posY);
          //getPosition();
          //props.setRotation(props.rotation - 90);
        }}
        rotateMenuPos={props.rotateMenuPos}
      >
        <motion.svg
          width={`${props.circleProperties.width}px`}
          height={`${props.circleProperties.height}px`}
          viewBox="0 0 400 400"
          title={`${props.rotateMenuPos[1].title}`}
          data-pos={props.rotateMenuPos[1].position}
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          onTap={props.onTap}
        >
          <circle
            cx="400"
            cy="250"
            r="100"
            fill="none"
            stroke="pink"
            strokeWidth="50"
          />
        </motion.svg>
      </NavbarMenuCircleLi2>
      <NavbarMenuCircleLi3
        ref={liContainerRef3}
        onClick={() => {
          //   const { offsetTop } = props.inputRef.current;
          //   const { offsetLeft } = props.inputRef.current;
          //   const { clientHeight } = props.inputRef.current;
          //   const { clientTop } = props.inputRef.current;
          //   const { clientLeft } = props.inputRef.current;
          const input = liContainerRef3.current.getBoundingClientRect();
          const posX = input.x;
          const posY = input.y;
          console.log("OrangeX:  " + posX, "OrangeY:  " + posY);
          //getPosition();
          //props.setRotation(props.rotation - 90);
        }}
        rotateMenuPos={props.rotateMenuPos}
      >
        <motion.svg
          width={`${props.circleProperties.width}px`}
          height={`${props.circleProperties.height}px`}
          viewBox="0 0 400 400"
          title={`${props.rotateMenuPos[3].title}`}
          data-pos={props.rotateMenuPos[3].position}
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          onTap={props.onTap}
        >
          <circle
            cx="400"
            cy="250"
            r="100"
            fill="none"
            stroke="orange"
            strokeWidth="50"
          />
        </motion.svg>
      </NavbarMenuCircleLi3>
      <NavbarMenuCircleLi4
        ref={liContainerRef4}
        onClick={() => {
          //   const { offsetTop } = props.inputRef.current;
          //   const { offsetLeft } = props.inputRef.current;
          //   const { clientHeight } = props.inputRef.current;
          //   const { clientTop } = props.inputRef.current;
          //   const { clientLeft } = props.inputRef.current;
          const input = liContainerRef4.current.getBoundingClientRect();
          const posX = input.x;
          const posY = input.y;
          console.log("GreenX:  " + posX, "GreenY:  " + posY);
          //getPosition();
          //props.setRotation(props.rotation - 90);
        }}
        rotateMenuPos={props.rotateMenuPos}
      >
        <motion.svg
          width={`${props.circleProperties.width}px`}
          height={`${props.circleProperties.height}px`}
          viewBox="0 0 400 400"
          title={`${props.rotateMenuPos[0].title}`}
          data-pos={props.rotateMenuPos[0].position}
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          onTap={props.onTap}
        >
          <circle
            cx="400"
            cy="250"
            r="100"
            fill="none"
            stroke="lime"
            strokeWidth="50"
          />
        </motion.svg>
      </NavbarMenuCircleLi4>
    </>
  );
};

export default NavbarMenuLi;
