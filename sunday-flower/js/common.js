"use strict";

{
  // scrollbar分のがたつきを抑えるための取得
  const fullWidth = window.innerWidth;
  const inWidth = document.documentElement.clientWidth;
  const scrollBarWidth = fullWidth - inWidth;

  // ハンバーガーを開く時に使うボタン、ナビリスト、背景、ボタンのテキストの取得
  const gnavBg = document.querySelector(".gnav-bg");
  const gnavList = document.querySelector(".gnav__list");
  const gnavButton = document.querySelector(".gnav__button");
  const gnavButtonText = document.querySelector(".gnav__button__text");
  // ボタンの三本線の取得
  const lineTop = document.querySelector(".icon-line__top");
  const lineMiddle = document.querySelector(".icon-line__middle");
  const lineBottom = document.querySelector(".icon-line__bottom");
  // 背景のスクロールを停止させるためにbody要素の取得
  const body = document.querySelector("body");

  // ナビリストと背景にtransitionを設定する関数を宣言
  function transitionIn() {
    gnavBg.style.transitionDuration = "0.5s";
    gnavList.style.transitionDuration = "0.5s";
  }
  //ナビリストと背景からtransitionを外す関数を宣言
  function transitionOut() {
    gnavBg.style.transitionDuration = "0s";
    gnavList.style.transitionDuration = "0s";
  }
  // ボタンのテキストをメニューに変える関数を宣言
  function textChangeMenu() {
    gnavButtonText.textContent = "メニュー";
  }

  /* ボタンを押すたび、背景とナビリストの出現切り替え */
  gnavButton.addEventListener("click", () => {
    if (scrollBarWidth > 0) {
      body.style.paddingRight = `${scrollBarWidth}px`;
    }
  
    transitionIn();
   
    gnavBg.classList.toggle("gnav--active-bg");
    gnavList.classList.toggle("gnav__list--active");
    body.classList.toggle("scroll-stop");

    lineTop.classList.toggle("icon-line__top--active");
    lineMiddle.classList.toggle("icon-line__middle--active");
    lineBottom.classList.toggle("icon-line__bottom--active");
  
    if (gnavButtonText.textContent === "メニュー") {
      gnavButtonText.textContent = "閉じる";
    } else {
      textChangeMenu();
      body.style.paddingRight = 0;
    }

    gnavList.addEventListener("transitionend", () => {
      transitionOut();
    });
  });

  // 画面幅が変わった時とスマホのフリック操作で閉じるように各クラスを除外する関数の宣言
  function removeClass() {
    gnavBg.classList.remove("gnav--active-bg");
    gnavList.classList.remove("gnav__list--active");
    lineTop.classList.remove("icon-line__top--active");
    lineMiddle.classList.remove("icon-line__middle--active");
    lineBottom.classList.remove("icon-line__bottom--active");
  }

  /* 画面幅が変わったときにも閉じれるようにする */
  window.addEventListener("resize", () => {
    removeClass();
    transitionOut();
    body.classList.remove("scroll-stop");
    textChangeMenu();
  });

  let startX = 0;
  let nowX = 0;

  gnavList.addEventListener("touchstart", (start) => {
    startX = start.touches[0].pageX;
  });

  gnavList.addEventListener("touchmove", (now) => {
    nowX = now.changedTouches[0].pageX;

    if (nowX - startX > 80) {
      transitionIn();
      removeClass();
      body.classList.remove("scroll-stop");
      textChangeMenu();
      gnavBg.addEventListener("transitionend", () => {
        transitionOut();
      });
    }
  });
}

{
  const headerInner = document.querySelector(".header__inner");
  const topBtn = document.querySelector(".c-button.-page-top");
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    if (scrollY > 500) {
      headerInner.classList.add("-active");
      topBtn.classList.add("-active");
    } else {
      headerInner.classList.remove("-active");
      topBtn.classList.remove("-active");
    }
  });

  topBtn.addEventListener("click", () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });
}

{ //scroll animation
  document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    const scrollAnimes = document.querySelectorAll("[data-scrollAnime='common']");
    scrollAnimes.forEach((scrollAnime) => {
      gsap.from(scrollAnime, {
        rotate: "10deg",
        y: "100px",
        filter: "blur(10px)",
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: scrollAnime,
          start: "top center+=120px",
          // markers: true,
        },
      });
    });

    const titleSection = document.querySelectorAll(".c-title-section");

    titleSection.forEach((title) => {
      gsap.from(title, {
        rotate: "10deg",
        y: "100px",
        filter: "blur(10px)",
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: title,
        },
      });
    });

    const shapeFlower = document.querySelectorAll(".c-shape-flower");
    shapeFlower.forEach((flower) => {
      gsap.from(flower, {
        y: "100px",
        filter: "blur(10px)",
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: flower,
        },
      });
    });
  });
}
