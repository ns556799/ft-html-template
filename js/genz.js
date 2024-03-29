import lottie from "lottie-web";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

gsap.registerPlugin(ScrollTrigger);

const lottieContainers = [...document.querySelectorAll(".lottie")];

const heroTl = gsap.timeline();
const heroTitle = document.querySelector(".pc-hero h1");
const heroStandfirst = document.querySelector(".pc-hero .standfirst");

const rImage = document.querySelector(".rotateImages");

heroTl
  .to(heroTitle, 1, { autoAlpha: 1 })
  .to(heroStandfirst, 1, { autoAlpha: 1 });

var tween = gsap.to(rImage, 4, {
  rotation: 360 * 2,
  ease: Linear.easeNone,
  paused: true,
});

gsap.fromTo(tween, 4, { progress: 0 }, { progress: 1, ease: Power4.easeInOut });

lottieContainers.forEach((container) => {
  const path = container.dataset.json;
  const state = window.getComputedStyle(container).display;

  if (state == "block") {
    const anim = lottie.loadAnimation({
      container: container, // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: false,
      path: path, // the path to the animation json
    });

    anim.addEventListener("DOMLoaded", (e) => {
      const test = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top center",
          markers: false,
          end: "bottom center",
          onEnter: () => lottie.play(),
          onEnterBack: () => lottie.play(),
          onLeave: () => lottie.pause(),
          onLeaveBack: () => lottie.stop(),
        },
      });
    });
  }
});
