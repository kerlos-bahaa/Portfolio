const myopen = document.querySelector('.open');
const nav = document.querySelector('.nav-links-2');
const myaxe = document.querySelector('.axe');
const mytra1 = document.querySelector('.nav-transition-1');
const mytra2 = document.querySelector('.nav-transition-2');
const mytra3 = document.querySelector('.nav-transition-3');

myopen.onclick = function () {
  nav.style.cssText = 'transform:translateY(0%);';
};
myaxe.onclick = function () {
  nav.style.cssText = 'transform: translateY(-100%);';
};
mytra1.onclick = function () {
  nav.style.cssText = 'transform: translateY(-100%);';
};
mytra2.onclick = function () {
  nav.style.cssText = 'transform: translateY(-100%);';
};
mytra3.onclick = function () {
  nav.style.cssText = 'transform: translateY(-100%);';
};
