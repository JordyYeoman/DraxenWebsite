import React from "react";
import Particles from "react-particles-js";

function mapStateToProps(state) {
  return {};
}

const Hero = () => {
  return (
    <div className="hero">
      <Particles
        params={{
          particles: {
            number: {
              value: 10,
              density: {
                enable: true,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
              direction: "top",
              out_mode: "out",
            },
          },
          color: {
            value: "pink", // I won't repeat myself, all the string values above will be valid here too
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0,
              },
              repulse: {
                distance: 400,
                duration: 4,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default Hero;
