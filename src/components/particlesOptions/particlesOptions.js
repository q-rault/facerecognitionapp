const particlesOptions= {
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
      // resize: true,
    },
    modes: {
      bubble: {
        distance: 25,
        duration: 3,
        opacity: 0.5,
        size: 300,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 80,
        duration: 3,
      },
    },
  },
  particles: {
    color: {
      value: "#fff",
    },
    links: {
      color: "#fff",
      distance: 100,
      enable: true,
      opacity: 0.1,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: true,
      speed: 0.9,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 100,
    },
    opacity: {
      value: 0.1,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 5,
    },
  },
  detectRetina: true,
}

export {particlesOptions};