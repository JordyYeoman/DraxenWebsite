import React from "react";
import { motion } from "framer-motion";
import ResponsivePlayer from "./responsive-player";
import SantaDraven from "../assets/img/Santa-Dravem-Leagueoflegends.png";
import HUDCircle from "./sub-components/HUDCircle";

const BodySectionThree = () => {
  return (
    <div className="BodySectionThree-Container">
      <div>Body section 3</div>
      <div className="BodySecThree-ContentContainer">
        <div className="sDra-imgContainer">
          <HUDCircle />
          <img src={SantaDraven} alt="Santa Draven" className="sDra-img" />
          <span className="sDra-imgContainer-Line"></span>
        </div>
        <div className="BodySecThree-Txt">
          <p>
            Now that there is the Tec-9, a crappy spray gun from South Miami.
            This gun is advertised as the most popular gun in American crime. Do
            you believe that shit? It actually says that in the little book that
            comes with it: the most popular gun in American crime. Like they're
            actually proud of that shit.
          </p>
        </div>
        <div className="BodySecThree-Img2">Hello</div>
      </div>
    </div>
  );
};

export default BodySectionThree;
