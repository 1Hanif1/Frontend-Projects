'use strict';
const header = document.querySelector('.header');
const hamburgerMenu = document.querySelector("#menuBtn");
const overlay = document.querySelector('.overlay');
const headerMenu = document.querySelector('.header__menu');
const body = document.querySelector('body');

function hamburgerToggleFunction() {
    header.classList.toggle('open')
    if (!header.classList.contains('open')) {
        overlay.classList.add('fade-out');
        headerMenu.classList.add('fade-down');
        body.classList.remove('no-scroll');
    } else {
        overlay.classList.add('fade-out');
        headerMenu.classList.add('fade-down');
        body.classList.add('no-scroll');
    }
}

hamburgerMenu.addEventListener('click', hamburgerToggleFunction)
overlay.addEventListener('click', hamburgerToggleFunction)
