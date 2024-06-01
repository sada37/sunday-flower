"use strict";

{
  //loading animation
  const loadingAnime = document.querySelector(".b-loading-animation");
  const loadingAnimeImg = document.querySelector(".b-loading-animation img");

  function loadingAnimeFunc() {
    loadingAnimeImg.animate(
      {
        translate: ["0 0", "0 -100%"],
        filter: [0, "blur(10px)"],
        opacity: [1, 0],
      },
      {
        duration: 700,
        delay: 500,
        fill: "forwards",
      }
    );
    loadingAnime.animate(
      {
        opacity: [1, 0],
      },
      {
        duration: 1000,
        fill: "forwards",
        easing: "linear",
        delay: 1500,
      }
    ).onfinish = () => {
      loadingAnime.hidden = true;
      window.removeEventListener("load", loadingAnimeFunc);
    };
  }

  const keyName = "visited";
  const keyValue = true;
  if (!sessionStorage.getItem(keyName)) {
    sessionStorage.setItem(keyName, keyValue);
    window.addEventListener("load", loadingAnimeFunc);
  } else {
    loadingAnime.hidden = true;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

});
