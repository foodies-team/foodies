import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";
import Swiper from "swiper/bundle";
import AOS from 'aos';

//發表文章 tags 手機版用swiper
const swiper = new Swiper(".tag-swiper", {
  //避免使用者移動到
  allowTouchMove: true,
  spaceBetween: 16,
  //一次呈現幾個.swiper-slide
  slidesPerView: "auto",

  grabCursor: true,

  breakpoints: {
    // 斷點顯示設定
    320: {
      // 當裝置寬大於 320
      slidesPerView: 3, // 要看見幾頁內容 (可用小數點讓使用者知道可滑動)
      spaceBetween: 16,
    },
    768: {
      // 當裝置寬大於 768
      slidesPerView: 5,
      spaceBetween: 16,
    },
  },
});

//探索新店、搜尋個頁 tags 手機版用swiper
const swiperSearch = new Swiper(".tag-swiper-2", {
  //避免使用者移動到
  //allowTouchMove: true,
  spaceBetween: 16,
  //一次呈現幾個.swiper-slide
  slidesPerView: "auto",

  grabCursor: true,
  breakpoints: {
    // 斷點顯示設定

    320: {
      // 當裝置寬大於 320
      slidesPerView: 3, // 要看見幾頁內容 (可用小數點讓使用者知道可滑動)
      spaceBetween: 16,
      grabCursor: true,
    },
    768: {
      // 當裝置寬大於 768
      slidesPerView: 5,
      spaceBetween: 20,
      grabCursor: false,
    },
  },
});
//美食總覽 swiper
const swiper2 = new Swiper(".store-swiper", {
  allowTouchMove: true,
  slidesPerView: 1,
  spaceBetween: 24,
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var likeSwiper = new Swiper(".like-swiper-container", {
  direction: "horizontal",
  loop: true,
  allowTouchMove: true,
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 16,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: "auto",
      spaceBetween: 24,
    },
  },
});

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 140, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: true, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


let search = document.getElementById("nav-search");
let food = document.getElementById("nav-food");
let blog = document.getElementById("nav-blog");
let explore = document.getElementById("nav-explore");

window.addEventListener("load", () => {
if (location.pathname == "/foodies/search.html"){
  search.classList.add("nav-active")
}else if (location.pathname == "/foodies/foodCollection.html"){
  food.classList.add("nav-active")
}else if (location.pathname == "/foodies/blog.html"){
  blog.classList.add("nav-active")
}else if (location.pathname == "/foodies/explore.html"){
  explore.classList.add("nav-active")
}
})
