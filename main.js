import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";
import Swiper from "swiper/bundle";

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

var mySwiper = new Swiper(".like-swiper-container", {
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
