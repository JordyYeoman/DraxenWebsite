import React, { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import NavRight from "./Navbar-menu-right";
import NavLeft from "./Navbar-menu-left";
import NavbarMenuLi from "./Navbar-menu-li";

const NavbarMenu = () => {
  const [circleContainer, setCircleContainer] = useState({
    x: 0,
    y: 0,
    pos: 0,
  });

  const circleProperties = {
    width: 30,
    height: 30,
  };

  // Store this as a state value
  let rotateMenuPos = [
    {
      title: "contact",
      position: 3,
      top: 0,
      left: 0,
    },
    {
      title: "facebook",
      position: 2,
      top: 0,
      left: 0,
    },
    {
      title: "menu",
      position: 1,
      top: 0,
      left: 0,
    },
    {
      title: "youtube",
      position: 4,
      top: 0,
      left: 0,
    },
  ];
  const sectionDeg = 360 / 4;
  const radiusLength = 20;
  const radianSectionDeg = (sectionDeg * Math.PI * 2) / 360;

  rotateMenuPos.forEach((item, index) => {
    item.top =
      (radiusLength * Math.sin(radianSectionDeg * index - 1.5708) - 30) * -1 +
      "px";
    item.left =
      (radiusLength * Math.cos(radianSectionDeg * index - 1.5708) - 45) * -1 +
      "px";
  });

  function calcPos(info, event) {
    console.log("///////////////////////////////////");
  }

  function onTap(event, info) {
    //console.log(info.point.x);
    //console.log(event.offsetY);
    calcPos(info, event);
  }

  const [rotation, setRotation] = useState(0);
  // const [position, setPosition] = useState({
  //   obj1XPos: 0,
  //   obj1YPos: 0,
  //   obj2XPos: 0,
  //   obj2YPos: 0,
  //   obj2XPos: 0,
  //   obj2YPos: 0,
  //   obj2XPos: 0,
  //   obj2YPos: 0,
  // });

  // If item 3 is clicked, calc where item 3 is & how many rotations it needs to do.

  // Set initial position of circle elements
  rotateMenuPos.forEach((item, index) => {
    item.top =
      (radiusLength * Math.sin(radianSectionDeg * index - 1.5708) - 60) * -1 +
      "px";
    item.left =
      (radiusLength * Math.cos(radianSectionDeg * index - 1.5708) - 60) * -1 +
      "px";
  });

  const containerRef = useCallback((node) => {
    if (node !== null) {
      // setHeight(node.getBoundingClientRect().height);
      const input = node.getBoundingClientRect();
      // Update State with new position
      setCircleContainer({ ...circleContainer, x: input.x, y: input.y });
    }
  }, []);

  //const [circleLeft, setCircleLeft] = useState(0);
  //const circleRef1 = useRef(0);
  //const containerRef = useRef(0);

  return (
    <motion.div
      initial={{
        borderBottomWidth: 0,
        borderBottomStyle: "solid",
        borderBottomColor: "rgba(255, 255, 255, 0)",
      }}
      animate={{
        borderBottomWidth: 1,
        borderBottomStyle: "solid",
        borderBottomColor: "rgba(255, 255, 255, 0.5)",
      }}
      transition={{ duration: 3.5 }}
      className="NavbarMenu"
    >
      <NavLeft />
      <motion.ul
        ref={containerRef}
        className="NavbarMenuUl"
        // onClick={() => {
        //   console.log(top);
        //   const { offsetTop } = containerRef.current;
        //   setTop(offsetTop);
        //   console.log(offsetTop, top);
        // }}
        //whileHover={{ rotate: 270 }}

        animate={{ rotate: rotation }}
        transition={{ duration: 0.5 }}
      >
        <NavbarMenuLi
          circleContainer={circleContainer}
          rotateMenuPos={rotateMenuPos}
          circleProperties={circleProperties}
          setRotation={setRotation}
          rotation={rotation}
          onTap={onTap}
        />
      </motion.ul>
      <NavRight />
    </motion.div>
  );
};

export default NavbarMenu;
