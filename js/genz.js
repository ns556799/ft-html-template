import lottie from "lottie-web";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

gsap.registerPlugin(ScrollTrigger);

const lottieContainers = [...document.querySelectorAll(".lottie")];

lottieContainers.forEach((container) => {
  const path = container.dataset.json;
  const state = window.getComputedStyle(container).display;

  if (state == "block") {
    lottie.loadAnimation({
      container: container, // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: false,
      path: path, // the path to the animation json
    });
    const test = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top center",
        markers: true,
        end: "bottom center",
        onEnter: () => lottie.play(),
        onEnterBack: () => lottie.play(),
        onLeave: () => lottie.pause(),
        onLeaveBack: () => lottie.stop(),
      },
    });
  }
});

// init Swiper:
const swiper = new Swiper(".relatedContent .swiper", {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
  },
  pagination: {
    el: ".relatedContent .swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".relatedContent.swiper-button-next",
    prevEl: ".relatedContent .swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".relatedContent .swiper-scrollbar",
  },
});
