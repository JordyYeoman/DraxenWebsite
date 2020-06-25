import React, { useState } from "react";
import { motion } from "framer-motion";

const useMove = () => {
  const [state, setState] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    e.persist();
    setState((state) => ({ ...state, x: e.clientX, y: e.clientY }));
  };
  return {
    x: state.x,
    y: state.y,
    handleMouseMove,
  };
};

const rotate = 0;

const HeroHUDCircle = () => {
  const { x, y, handleMouseMove } = useMove();
  return (
    <div className="mouseArea" onMouseMove={handleMouseMove}>
      <div className="mouseInfo">
        ({x}, {y})
      </div>
    </div>
  );
};

export default HeroHUDCircle;
