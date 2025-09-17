// Red dots
particlesJS("particles-js-dots", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#cc0000" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: true },
    size: { value: 5, random: true },
    line_linked: { enable: false },
    move: {
      enable: true,
      speed: 1,
      direction: "top",
      straight: false,
      out_mode: "out",
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: { onhover: { enable: false }, onclick: { enable: false } },
  },
  retina_detect: true,
});

// Hexagrams
particlesJS("particles-js-hexagrams", {
  particles: {
    number: { value: 3, density: { enable: true, value_area: 800 } },
    shape: {
      type: "image",
      image: {
        src: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 194.21 221'><path d='M96.853 20.5l74.531 127.929L22.321 72.57 96.853 200.5l74.531-127.929L22.321 148.43 96.853 20.5z' fill='none' stroke='%23cc0000' stroke-width='12' opacity='0.4'/></svg>",
        width: 100,
        height: 100,
      },
    },
    size: {
      value: 7,
      random: true,
      anim: { enable: true, speed: 1, size_min: 10, sync: false },
    },
    line_linked: { enable: false },
    move: {
      enable: true,
      speed: .6,
      direction: "top",
      straight: true,
      out_mode: "out",
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: { onhover: { enable: false }, onclick: { enable: false } },
  },
  retina_detect: true,
});
