'use strict';
const header = document.querySelector('.header');
const hamburgerMenu = document.querySelector("#menuBtn");
const overlay = document.querySelector('.overlay');
const headerMenu = document.querySelector('.header__menu');
const body = document.querySelector('body');
const featureContainer = document.querySelector('.feature');
const articleContainer = document.querySelector('.articles');

const observerOptions = { root: null, threshold: 0.4 }

const features = document.querySelectorAll('.feature__item');
const featureObserver = new IntersectionObserver(
    (e) => {
        if (!e[0].isIntersecting) return;
        let miliseconds = 200;
        features.forEach(
            feature => {
                setTimeout(
                    () => feature.classList.add('show-card'),
                    miliseconds
                );
                miliseconds += 100;
            }
        )

    },
    observerOptions
);
featureObserver.observe(featureContainer);

const articles = document.querySelectorAll('.article__item');
const articleObserver = new IntersectionObserver(
    (e) => {
        if (!e[0].isIntersecting) return;
        let miliseconds = 200;
        articles.forEach(
            article => {
                setTimeout(
                    () => article.classList.add('show-card'),
                    miliseconds
                );
                miliseconds += 100;
            }
        )
    },
    observerOptions
)
articleObserver.observe(articleContainer);

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
