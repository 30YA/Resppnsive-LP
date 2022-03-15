"use strict";
import "./style/style.css";
import "../node_modules/boxicons/dist/boxicons.js";
import "../node_modules/scrollreveal/dist/scrollreveal.js";
import "./img/img.js"

const nav = document.querySelector(".nav__menu");
// ============ Show menu =================
(function showMenu(nav) {
  const toggle = document.querySelector(".nav__toggle");
  toggle.addEventListener("click", () => {
    nav.classList.toggle("show-menu");
  });
})(nav);
// ============ Remove menu mobile =================
(function removeMenu(nav) {
  const links = document.querySelectorAll(".nav__link");
  links.forEach((item) => {
    item.addEventListener("click", () => {
      nav.classList.remove("show-menu");
    });
  });
})(nav);

// ============ Scroll Section Active Link =================
// =========================================================

// ============ change background header =================
function headerBoxshadow() {
  const header = document.querySelector("header");
  if (this.scrollY > 100) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", headerBoxshadow);

// ============ show scroll Top Btn =================
function showScrollBtn() {
  const scrollBTN = document.querySelector(".scrollTop");
  if (this.scrollY > 550) {
    scrollBTN.classList.add("show-scroll-Btn");
  } else {
    scrollBTN.classList.remove("show-scroll-Btn");
  }
}
window.addEventListener("scroll", showScrollBtn);