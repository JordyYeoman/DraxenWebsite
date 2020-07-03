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
            <h2>DRAVEN BUILDS:</h2>
            <h4>Subtle?....I dont do subtle</h4>
            Blow the dust off your axes, prepare your finger for 'W' key spam.
            It's time we get into the muck and theory-craft the sh*t out of the
            best builds in season 10.
            <br></br>
            <br></br>
            We all know, Draven is struggling down in the bottom lane. Lets
            bring our boy back with some real data.
          </p>
          <div className="BodySecThree-Img2">
            <div>
              <ul className="draven-build-paths--list">
                <li className="draven-build-paths">Lethality</li>
                <li className="draven-build-paths">Crit</li>
                <li className="draven-build-paths">Hybrid</li>
                <li className="draven-build-paths">Tank</li>
                <li className="draven-build-paths">Survivor</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodySectionThree;
