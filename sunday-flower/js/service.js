"use strict";
// p-service__slider
const options = {
  arrows: false,
  autoplay: true,
  type: "loop",
  pagination: false,
  speed: 1000,
  heightRatio: 0.67,
  gap: 16,
  padding: "10vw",
  width: "1376px",
  mediaQuery: "min",
  breakpoints: {
    1200: {
      gap: 32,
      height: "75dvh",
    },
  },
};

const serviceSlides = new Splide(".p-service-slider.splide", options);

// p-service__slider-thumbnail
const thumbnailOption = {
  width: "280px",
  arrows: false,
  perPage: 3,
  type: "loop",
  focus: "center",
  gap: 16,
  pagination: false,
  isNavigation: true,
  mediaQuery: "min",
  breakpoints: {
    600: {
      gap: 32,
      padding: "1em",
      width: "600px",
    },
    900: {
      gap: 32,
      padding: "1em",
      width: "800px",
    },
  },
};

const serviceSlidesThumbnail = new Splide(
  ".p-service-slider-thumbnail.splide",
  thumbnailOption
);

serviceSlides.sync(serviceSlidesThumbnail);
serviceSlides.mount();
serviceSlidesThumbnail.mount();

//scroll animation
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  let mq = gsap.matchMedia();
  const p_serviceImgs = document.querySelectorAll(".p-service-item__img");
  
  mq.add("(max-width: 767px)", () => {
    p_serviceImgs.forEach((img) => {
      gsap.from(img, {
        x: "-30%",
        opacity: 0,
        filter: "blur(10px)",
        scrollTrigger: {
          trigger: img,
          scrub: 0.5,
          start: "top-=500px top",
          end: "bottom+=200px bottom",
          once: true,
        },
      });
    });
  });

  mq.add("(min-width: 768px)", () => {
    p_serviceImgs.forEach((img) => {
      gsap.from(img, {
        x: "-30%",
        filter: "blur(10px)",
        opacity: 0,
        scrollTrigger: {
          trigger: img,
          scrub: 0.5,
          start: "top-=500px top",
          end: "bottom+=400px bottom",
          once: true,
        },
      });
    });
  });
});
