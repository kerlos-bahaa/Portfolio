let myopen = document.querySelector("open");
let nav = document.querySelector(".nav-links-2");
let myaxe = document.querySelector(".axe");
let mytra1 = document.querySelector(".nav-transition-1");
let mytra2 = document.querySelector(".nav-transition-2");
let mytra3 = document.querySelector(".nav-transition-3");
myopen.onclick = function () {
  nav.style.cssText = "transform: translateY(0%);";
};
myaxe.onclick = function () {
  nav.style.cssText = "transform: translateY(-100%);";
};
mytra1.onclick = function () {
  nav.style.cssText = "transform: translateY(-100%);";
};
