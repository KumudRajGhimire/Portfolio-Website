import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 250, // Normal stars count
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          color: {
            value: ["#ffffff", "#c2c2c2"], // White and grayish-white for normal stars
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            direction: "right",
            speed: 0.05,
          },
          size: {
            value: 1.5, // Normal stars
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.5,
              sync: false,
            },
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
        // Adding big bright stars
        particles_bright: {
          number: {
            value: 3, // Only 2-3 bright stars
          },
          color: {
            value: "#ffd700", // Golden yellow bright stars
          },
          size: {
            value: 5, // Bigger size for bright stars
            random: false,
          },
          opacity: {
            value: 1, // Fully bright
            anim: {
              enable: true,
              speed: 0.5, // Slow twinkle effect
              opacity_min: 0.8,
              sync: false,
            },
          },
          move: {
            speed: 0.01, // Slightly moves
          },
        },
      }}
    />
  );
}

export default Particle;
