'use strict';
const body = document.querySelector('body');
const sliderBtn = document.querySelector('.slider__button');
const slider = document.querySelector('.slider');
const inputBtn = document.querySelectorAll('.input');

// to change theme
sliderBtn.addEventListener('click', (e) => {
  e.target.dataset.theme === '3'
    ? (e.target.dataset.theme = '1')
    : e.target.dataset.theme++;
  let theme = e.target.dataset.theme;
  themeChange(theme);
});

// change theme as per slider value
const themeChange = function (theme) {
  switch (theme) {
    case '1':
      themeOne();
      break;
    case '2':
      themeTwo();
      break;
    case '3':
      themeThree();
      break;
  }
};

// theme styles
const themeOne = () => {
  slider.style.justifyContent = 'flex-start';
  sliderBtn.style.backgroundColor = 'hsl(25, 98%, 40%)';
  body.style.backgroundColor = 'hsl(222, 26%, 31%)';
  body.style.color = 'white';
  slider.style.backgroundColor = 'hsl(223, 31%, 20%)';
  output.style.backgroundColor = 'hsl(224, 36%, 15%)';
  inputBtn.forEach((input) => {
    input.style.color = 'hsl(221, 14%, 31%)';
    input.style.backgroundColor = 'hsl(30, 25%, 89%)';
    input.style.boxShadow = '0rem 0.2rem hsl(28, 16%, 65%)';
  });
  inputContainer.style.backgroundColor = 'hsl(223, 31%, 20%)';
  deleteBtn.style.backgroundColor = reset.style.backgroundColor =
    'hsl(225, 21%, 49%)';
  deleteBtn.style.boxShadow = reset.style.boxShadow =
    '0rem 0.2rem hsl(224, 28%, 35%)';
  deleteBtn.style.color = reset.style.color = 'white';
  equalBtn.style.color = 'white';
  equalBtn.style.backgroundColor = 'hsl(6, 63%, 50%)';
  equalBtn.style.boxShadow = '0rem 0.2rem hsl(6, 70%, 34%)';
};

const themeTwo = () => {
  slider.style.justifyContent = 'center';
  sliderBtn.style.backgroundColor = 'hsl(25, 98%, 40%)';
  body.style.backgroundColor = 'hsl(0, 0%, 90%)';
  body.style.color = 'hsl(60, 10%, 19%)';
  slider.style.backgroundColor = 'hsl(0, 5%, 81%)';
  output.style.backgroundColor = 'hsl(0, 0%, 93%)';
  inputBtn.forEach((input) => {
    input.style.color = 'hsl(60, 10%, 19%)';
    input.style.backgroundColor = 'hsl(45, 7%, 89%)';
    input.style.boxShadow = '0rem 0.2rem hsl(35, 11%, 61%)';
  });
  inputContainer.style.backgroundColor = 'hsl(0, 5%, 81%)';
  deleteBtn.style.backgroundColor = reset.style.backgroundColor =
    'hsl(185, 42%, 37%)';
  deleteBtn.style.boxShadow = reset.style.boxShadow =
    '0rem 0.2rem hsl(185, 58%, 25%)';
  deleteBtn.style.color = reset.style.color = 'white';
  equalBtn.style.color = 'white';
  equalBtn.style.backgroundColor = 'hsl(25, 98%, 40%)';
  equalBtn.style.boxShadow = '0rem 0.2rem hsl(25, 99%, 27%)';
};

const themeThree = () => {
  slider.style.justifyContent = 'flex-end';
  sliderBtn.style.backgroundColor = 'hsl(176, 100%, 44%)';
  body.style.backgroundColor = 'hsl(268, 75%, 9%)';
  body.style.color = 'hsl(52, 100%, 62%)';
  slider.style.backgroundColor = 'hsl(268, 71%, 12%)';
  output.style.backgroundColor = 'hsl(268, 71%, 12%)';
  inputBtn.forEach((input) => {
    input.style.color = 'hsl(52, 100%, 62%)';
    input.style.backgroundColor = 'hsl(268, 47%, 21%)';
    input.style.boxShadow = '0rem 0.2rem hsl(290, 70%, 36%)';
  });
  inputContainer.style.backgroundColor = 'hsl(268, 71%, 12%)';
  deleteBtn.style.backgroundColor = reset.style.backgroundColor =
    'hsl(281, 89%, 26%)';
  deleteBtn.style.boxShadow = reset.style.boxShadow =
    '0rem 0.2rem hsl(285, 91%, 52%)';
  deleteBtn.style.color = reset.style.color = 'white';
  equalBtn.style.color = 'white';
  equalBtn.style.backgroundColor = 'hsl(176, 100%, 44%)';
  equalBtn.style.boxShadow = '0rem 0.2rem hsl(177, 92%, 70%)';
};

// Prefers-color-scheme to detect system dark/light mode
// Check if browser supports window.matchMedia and if yes then check mode
const darkMode =
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches;

const lightMode =
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: light)').matches;

// If can't detect then fall back to default theme: themeOne()
if (darkMode) {
  themeThree();
  sliderBtn.dataset.theme = '3';
} else if (lightMode) {
  themeTwo();
  sliderBtn.dataset.theme === '2';
} else {
  themeOne();
  sliderBtn.dataset.theme === '1';
}
