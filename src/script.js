"use strict";
import "./style/style.css";
import "../node_modules/boxicons/dist/boxicons.js";
import "./img/img.js";
import ScrollReveal from "../node_modules/scrollreveal/dist/scrollreveal.js";

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

// ============ Dark theme =================
const body = document.querySelector("body");
const themeBTN = document.querySelector(".change__theme");
themeBTN.addEventListener("click", () => {
  if (!body.classList.contains("dark-theme")) {
    document.querySelector("body").classList.add("dark-theme");
    themeBTN.classList.remove("bx-toggle-left");
    themeBTN.classList.add("bx-toggle-right");
  } else {
    document.querySelector("body").classList.remove("dark-theme");
    themeBTN.classList.remove("bx-toggle-right");
    themeBTN.classList.add("bx-toggle-left");
  }
});

// ============ Scroll Reveal =================
const sr = ScrollReveal({
  distance: "50px",
  duration: 1800,
  reset: true,
  delay: 0,
});

sr.reveal(
  `.home__data, .home__img, 
.card,
.accessories__content,
.footer__content`,
  {
    origin: "top",
    interval: 200,
  }
);

sr.reveal(`.share__img, .send__content`, {
  origin: "left",
  rotate: { x: 40, z: 50 },
  delay: 400,
});

sr.reveal(`.share__data, .send__img`, {
  origin: "right",
  scale: 0.1,
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");
function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
    }else{
        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  });
}
window.addEventListener("scroll", scrollActive);
