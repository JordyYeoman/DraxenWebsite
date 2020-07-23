import React from "react";
import { motion } from "framer-motion";
import ResponsivePlayer from "./responsive-player";
import SantaDraven from "../assets/img/Santa-Dravem-Leagueoflegends.png";
import HUDCircle from "./sub-components/HUDCircle";
import Manamune from "../assets/img/Manamune-dravenbuilds.png";
import EdgeofNight from "../assets/img/EdgeofNight-Dravenbuilds.png";
import Sanguine from "../assets/img/SanguineBlade-DravenBuilds.png";
import Dblade from "../assets/img/doransblade-dravenbuilds.png";
import Healthpot from "../assets/img/healthpotion-dravenbuilds.png";
import Bloodthirster from "../assets/img/bloodthirster.png";
import infedge from "../assets/img/infinityedge.png";
import rfc from "../assets/img/rapidfirecannon.png";
import zerkers from "../assets/img/berserkersgreaves.png";
import betaboots from "../assets/img/ninjatabi.png";
import deathsdance from "../assets/img/deathsdance.png";
import guardianangel from "../assets/img/guardianangel.png";
import essencereaver from "../assets/img/essencereaver.png";
import youmuus from "../assets/img/yomuus.png";

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
                <li className="draven-build-paths">
                  <div className="Draven-item-build lethality-build-path">
                    <h3>Lethality</h3>
                    <div className="Draven-items-container">
                      <div className="Draven-items">
                        <img
                          src={Dblade}
                          alt="Doran's Blade-Draven Lethality Build"
                        />
                        Doran's Blade
                      </div>
                      <div className="Draven-items">
                        <img
                          src={Healthpot}
                          alt="Health potion-Draven Lethality Build"
                        />
                        Health Potion
                      </div>
                      <div className="Draven-items">
                        <img
                          src={zerkers}
                          alt="Berzerker Boots Draven Crit Build"
                        />
                        Berserker's Greaves
                      </div>
                      <div className="Draven-items">
                        <img
                          src={Manamune}
                          alt="Manamune-Draven Lethality Build"
                        />
                        Manamune
                      </div>
                      <div className="Draven-items">
                        <img
                          src={Sanguine}
                          alt="Sanguine Blade-Draven Lethality Build"
                        />
                        Sanguine Blade
                      </div>
                      <div className="Draven-items">
                        <img
                          src={EdgeofNight}
                          alt="Edge of Night-Draven Lethality Build"
                        />
                        Edge of Night
                      </div>
                      <div className="Draven-items">
                        <img
                          src={youmuus}
                          alt="Youmuu's Ghostblade Draven Lethality Build"
                        />
                        Youmuu's Ghostblade
                      </div>
                    </div>
                  </div>
                </li>
                <li className="draven-build-paths">
                  <div className="Draven-item-build lethality-build-path">
                    <h3>Crit</h3>
                    <div className="Draven-items-container">
                      <div className="Draven-items">
                        <img
                          src={Dblade}
                          alt="Doran's Blade-Draven Lethality Build"
                        />
                        Doran's Blade
                      </div>
                      <div className="Draven-items">
                        <img
                          src={Healthpot}
                          alt="Health potion-Draven Lethality Build"
                        />
                        Health Potion
                      </div>
                      <div className="Draven-items">
                        <img
                          src={zerkers}
                          alt="Berzerker Boots Draven Crit Build"
                        />
                        Berserker's Greaves
                      </div>
                      <div className="Draven-items">
                        <img
                          src={Bloodthirster}
                          alt="Blood Thirster Draven Crit Build"
                        />
                        Blood thirster
                      </div>
                      <div className="Draven-items">
                        <img
                          src={infedge}
                          alt="Infinity Edge Draven Crit Build"
                        />
                        Infinity Edge
                      </div>
                      <div className="Draven-items">
                        <img
                          src={rfc}
                          alt="Rapid Fire Cannon Draven Crit Build"
                        />
                        Rapid Fire Cannon
                      </div>
                      <div className="Draven-items">
                        <img
                          src={essencereaver}
                          alt="Essence Reaver Draven Crit Build"
                        />
                        Essence Reaver
                      </div>
                    </div>
                  </div>
                </li>
                <li className="draven-build-paths">
                  <div className="Draven-item-build lethality-build-path">
                    <h3>Survivor</h3>
                    <div className="Draven-items-container">
                      <div className="Draven-items">
                        <img
                          src={Dblade}
                          alt="Doran's Blade-Draven Lethality Build"
                        />
                        Doran's Blade
                      </div>
                      <div className="Draven-items">
                        <img
                          src={Healthpot}
                          alt="Health potion-Draven Survivor Build"
                        />
                        Health Potion
                      </div>
                      <div className="Draven-items">
                        <img
                          src={betaboots}
                          alt="Berzerker Boots Draven Survivor Build"
                        />
                        Beta Boots (Ninja Tabi's)
                      </div>
                      <div className="Draven-items">
                        <img
                          src={Bloodthirster}
                          alt="Blood Thirster Draven Survivor Build"
                        />
                        Blood thirster
                      </div>
                      <div className="Draven-items">
                        <img
                          src={deathsdance}
                          alt="Deaths Dance Draven Survivor Build"
                        />
                        Deaths Dance
                      </div>
                      <div className="Draven-items">
                        <img
                          src={EdgeofNight}
                          alt="Edge of Night-Draven Survivor Build"
                        />
                        Edge of Night
                      </div>
                      <div className="Draven-items">
                        <img
                          src={guardianangel}
                          alt="Guardian Angel Draven Survivor Build"
                        />
                        Guardian Angel
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodySectionThree;
