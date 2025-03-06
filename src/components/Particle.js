import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      options={{
        particles: {
          number: {
            value: 250, // Normal stars count
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          color: {
            value: ["#ffffff", "#c2c2c2", "#aaddff", "#ffcc99", "#ffdd44", "#99aaff"], // Midnight star colors
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            direction: "none",
            speed: 0.1,
          },
          size: {
            value: 1.5, // Normal stars
            anim: {
              enable: true,
              speed: 1.5,
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
              particles_nb: 3,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
