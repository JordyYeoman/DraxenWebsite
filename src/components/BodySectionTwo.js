import React from "react";
import { motion } from "framer-motion";
import ResponsivePlayer from "./responsive-player";
import dravensilhoutte from "../assets/img/DraveLeagueoflegendsnumerounoadc.png";

const BodySectionTwo = () => {
  return (
    <div className="BodySectionTwo-Container">
      <ResponsivePlayer url="https://www.youtube.com/watch?v=DhkTYlQAUa8&t=416s" />
      <div className="BodySectionTwo-MiddleTop-Container">
        <div className="BodySectionTwo-MiddleTop-Txt">
          <h2>NO MAN</h2>
          <h3>Can stand in my way.</h3>
          Don't be jealous, many mere mortals have fallen to my glorious axes.
          Seriously, isn't Draven just the coolest champion in this whole damn
          game. No fancy tricks, OP abilities, 400 dashes, insta-full health one
          hit - full armour carry..... just... purity.
          <br></br>
          <br></br>
          Cleanse yourself of these beta-ass champions, play Draven and soothe
          your poor innocent soul. You know full well that abusing cockroaches
          like Ka-sai & Aphelios just feels wrong. You feel weaker after every
          game, like you need to drop to the floor and do 100 push-ups just to
          try regain 10% of your manliness. Yet you lock in another Aphelios
          game with your boyfriend holding your hand the whole way as he
          insta-locks Yuumi.
        </div>
      </div>
      <div className="BodySectionTwo-charName-Container">
        <div className="BodySectionTwo-charName">
          Jordy <br></br>Yeoman
        </div>
      </div>
      <div className="BodySectionTwo-BottomLeft-Container">
        <div className="BodySectionTwo-BottomLeft-charName2">
          <span className="charName-rotate">
            Glorious <br></br>Executioner
          </span>
          <div className="BodySectionTwo-BottomLeft-charName2Txt">
            <h2>ENOUGH.</h2>
            <h4 style={{ marginBottom: 0 }}>PLAY DRAVEN.</h4>
            <h6 style={{ marginTop: 0 }}>DOMINATE.</h6>
            My money's in that office, right? If she start giving me some
            bullshit about it ain't there, and we got to go someplace else and
            get it, I'm gonna shoot you in the head then and there. Then I'm
            gonna shoot that bitch in the kneecaps, find out where my goddamn
            money is. She gonna tell me too. Hey, look at me when I'm talking to
            you, motherfucker. You listen: we go in there, and that nigga
            Winston or anybody else is in there, you the first motherfucker to
            get shot. You understand?
          </div>
        </div>
      </div>
      <div className="BodySectionTwo-BottomMiddle-Container">
        <div className="BodySectionTwo-largeText -b">17</div>
        <br></br>
        <div className="BodySectionTwo-largeText -w">48</div>
      </div>
      <div className="BodySectionTwo-BottomRight-Container">
        <div className="BodySectionTwo-BottomRight-Cont">
          <span className="BodySectionTwo-BottomRight-txt">YEOMAN</span>
          <span className="BodySectionTwo-BottomRight-img">
            <img
              src={dravensilhoutte}
              alt="Draven League of legends numero uno adc"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default BodySectionTwo;
