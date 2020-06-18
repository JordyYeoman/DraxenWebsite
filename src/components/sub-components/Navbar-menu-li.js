import React, { useRef, useState, useEffect, useCallback } from "react";
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

// Calculate Position of Circles
// function calcPos() {
//   if
// }

const NavbarMenuLi = (props) => {
  // Initialized State:
  const [wCirclePos, setWCirclePos] = useState({ x: 0, y: 0, pos: 0 });
  const [gCirclePos, setGCirclePos] = useState({ x: 0, y: 0, pos: 0 });
  const [pCirclePos, setPCirclePos] = useState({ x: 0, y: 0, pos: 0 });
  const [oCirclePos, setOCirclePos] = useState({ x: 0, y: 0, pos: 0 });

  const [wRotation, setWRotation] = useState(90);

  const liContainerRef1 = useRef(0);
  const liContainerRef2 = useRef(0);
  const liContainerRef3 = useRef(0);
  const liContainerRef4 = useRef(0);

  // On component mount, collect the circle position data and update the state.
  useEffect(() => {
    console.log("Runs after render?");
  }, []);

  const liContainerRef1Pos = useCallback((node) => {
    if (node !== null) {
      // setHeight(node.getBoundingClientRect().height);
      const input = node.getBoundingClientRect();
      // Update State with new position
      setWCirclePos({ ...wCirclePos, x: input.x, y: input.y });
    }
  }, []);

  const liContainerRef2Pos = useCallback((node) => {
    if (node !== null) {
      // setHeight(node.getBoundingClientRect().height);
      const input = node.getBoundingClientRect();
      // Update State with new position
      setPCirclePos({ ...pCirclePos, x: input.x, y: input.y });
    }
  }, []);

  const liContainerRef3Pos = useCallback((node) => {
    if (node !== null) {
      // setHeight(node.getBoundingClientRect().height);
      const input = node.getBoundingClientRect();
      // Update State with new position
      setOCirclePos({ ...oCirclePos, x: input.x, y: input.y });
    }
  }, []);

  const liContainerRef4Pos = useCallback((node) => {
    if (node !== null) {
      // setHeight(node.getBoundingClientRect().height);
      const input = node.getBoundingClientRect();
      // Update State with new position
      setGCirclePos({ ...gCirclePos, x: input.x, y: input.y });
    }
  }, []);

  function reCalcPos() {
    const input = liContainerRef1.current.getBoundingClientRect();
    // Update State with new position
    setWCirclePos({ ...wCirclePos, x: input.x, y: input.y });

    const input2 = liContainerRef2.current.getBoundingClientRect();
    setPCirclePos({ ...pCirclePos, x: input2.x, y: input2.y });

    const input3 = liContainerRef3.current.getBoundingClientRect();
    setOCirclePos({ ...oCirclePos, x: input3.x, y: input3.y });

    const input4 = liContainerRef4.current.getBoundingClientRect();
    setGCirclePos({ ...gCirclePos, x: input4.x, y: input4.y });

    console.log(
      "FIRST RUN",
      "WhiteX:  " + wCirclePos.x,
      "WhiteY:  " + wCirclePos.y,
      "WhitePos:  " + wCirclePos.pos
    );

    if (wCirclePos.y > 45 && wCirclePos.y < 55) {
      //setWCirclePos({ ...wCirclePos, pos: 4 });\
      props.setRotation(180);
      console.log("Position 4");
    } else if (wCirclePos.y > 12 && wCirclePos.y < 15) {
      //setWCirclePos({ ...wCirclePos, pos: 1 });
      props.setRotation(360);
      console.log("Position 1");
    } else if (wCirclePos.y > 33 && wCirclePos.y < 35) {
      props.setRotation(90);
      console.log("Position 3");
    } else if (wCirclePos.y > 19.5 && wCirclePos.y < 21) {
      props.setRotation(270);
      console.log("Position 2");
    } else {
      props.setRotation(90);
      console.log("Position 1");
    }

    // Test

    //console.log("PinkX:  " + pCirclePos.x, "PinkY:  " + pCirclePos.y);
    //console.log("OrangeX:  " + oCirclePos.x, "OrangeY:  " + oCirclePos.y);
    //console.log("GreenX:  " + gCirclePos.x, "GreenY:  " + gCirclePos.y);
  }

  //console.log(wCirclePos, pCirclePos, oCirclePos, gCirclePos);

  // const input = liContainerRef1.current.getBoundingClientRect();
  // // Update State with new position
  // setWCirclePos({ ...wCirclePos, x: input.x, y: input.y });
  // console.log("WhiteX:  " + wCirclePos.x, "WhiteY:  " + wCirclePos.y);
  // document.title = `${wCirclePos.x}`;
  // const input2 = liContainerRef2.current.getBoundingClientRect();
  // setPCirclePos({ ...pCirclePos, x: input2.x, y: input2.y });
  // console.log("PinkX:  " + pCirclePos.x, "PinkY:  " + pCirclePos.y);
  // const input3 = liContainerRef3.current.getBoundingClientRect();
  // setOCirclePos({ ...oCirclePos, x: input3.x, y: input3.y });
  // console.log("OrangeX:  " + oCirclePos.x, "OrangeY:  " + oCirclePos.y);
  // const input4 = liContainerRef4.current.getBoundingClientRect();
  // setGCirclePos({ ...gCirclePos, x: input4.x, y: input4.y });
  // console.log("GreenX:  " + gCirclePos.x, "GreenY:  " + gCirclePos.y);

  return (
    <>
      <NavbarMenuCircleLi1
        ref={liContainerRef1Pos}
        ref={liContainerRef1}
        onClick={() => {
          reCalcPos();
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
        ref={liContainerRef2Pos}
        ref={liContainerRef2}
        onClick={() => {
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
        ref={liContainerRef3Pos}
        ref={liContainerRef3}
        onClick={() => {
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
        ref={liContainerRef4Pos}
        ref={liContainerRef4}
        onClick={() => {
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
