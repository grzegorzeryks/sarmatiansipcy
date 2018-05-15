/*jshint esversion: 6 */


let menuUl = document.querySelector('.header-menu');
let logo = document.querySelector('.logo');
console.log(menuUl);
var allLi = menuUl.querySelectorAll("li");
console.log(allLi);

for (var i = 0; i < allLi.length; i++) {
  allLi[i].addEventListener('mouseover', peperShow);
  allLi[i].addEventListener('mouseout', peperOut);
}

function peperShow() {
  console.log('on');
  logo.classList.add('logo-move');
}
function peperOut() {
  logo.classList.remove('logo-move');
}
