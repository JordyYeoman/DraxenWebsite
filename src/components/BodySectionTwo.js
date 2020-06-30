import React from "react";
import { motion } from "framer-motion";
import ResponsivePlayer from "./responsive-player";

const BodySectionTwo = () => {
  return (
    <div className="BodySectionTwo-Container">
      <ResponsivePlayer url="https://www.youtube.com/watch?v=DhkTYlQAUa8&t=416s" />
      <div>Hello World I'm blue!</div>
      <div>Yes hello</div>
      <div>What?</div>
      <div>Who</div>
      <div>Where</div>
    </div>
  );
};

export default BodySectionTwo;
