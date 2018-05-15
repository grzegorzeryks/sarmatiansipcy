/*jshint esversion: 6 */


let menuUl = document.querySelector('.header-menu');
let logo = document.querySelector('.logo');
let allLi = menuUl.querySelectorAll('li');
let footerArrow = document.querySelector('.footer-arrow');
let footer = document.querySelector('footer');

for (let i = 0; i < allLi.length; i++) {
  allLi[i].addEventListener('mouseover', peperShow);
  allLi[i].addEventListener('mouseout', peperOut);
}

footerArrow.addEventListener('click', footerShow);

function footerShow() {
  if (footer.style.bottom != '0px') {
    footer.style.bottom = '0px';
  } else {
    footer.style.bottom = '-90px';
  }
}

function peperShow() {
  logo.classList.add('logo-move');
}

function peperOut() {
  logo.classList.remove('logo-move');
}

// checking if use has scrolled to the bottom of the page
window.onscroll = function() {
  let pageHeight = document.documentElement.offsetHeight,
    windowHeight = window.innerHeight,
    scrollPosition = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);




  if (pageHeight <= windowHeight + scrollPosition) {
    footer.style.bottom = '0px';
  }
  else {
    footer.style.bottom = '-90px';
  }
};
