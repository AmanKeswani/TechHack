import { useCallback } from "react";
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


const Particle = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);

        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

return(
    <Particles height="100vh" width="100vw"
      id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              background: {
                color: {
                    value: "#07030D",
                },
            },
            fpsLimit: 90,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
              color: {
                  value: "#B58EBC",
              },
              links: {
                  color: "#B58EBC",
                  distance: 150,
                  enable: true,
                  opacity: 0.3,
                  width: 1,
              },
              collisions: {
                  enable: true,
              },
              move: {
                directions: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 3,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            opacity: {
              value: 0.5,
          },
          shape: {
              type: "square",
          },
          size: {
              value: { min: 1, max: 5 },
          },
      },
      detectRetina: true,
  }} />
);
}

export default Particle