'use script';
const section1 = document.querySelector('.main__section--one');
const section2 = document.querySelector('.main__section--two');
const testSection = document.querySelector('.test');
const test = document.querySelectorAll('.test__card');
window.addEventListener('load', () => {
	section1.classList.add('left--js');
	section2.classList.add('right--js');
	test.forEach((test) => test.classList.add('up--js'));
});

const optionsSection = {
	root: null,
	threshold: 0.25,
};

const optionsTestimonial = {
	root: null,
	threshold: 0.5,
};

const slideLeft = function (el, status) {
	if (status) {
		el.classList.remove('left--js');
	}
};
const slideRigth = function (el, status) {
	if (status) {
		el.classList.remove('right--js');
	}
};

const slideUp = function (el, status) {
	if (status) {
		el.forEach((el) => el.classList.remove('up--js'));
	}
};

const observer1 = new IntersectionObserver((e) => {
	e.forEach((e) => {
		slideLeft(section1, e.isIntersecting);
	});
}, optionsSection);

const observer2 = new IntersectionObserver((e) => {
	e.forEach((e) => {
		slideRigth(section2, e.isIntersecting);
	});
}, optionsSection);

const observer3 = new IntersectionObserver((e) => {
	e.forEach((e) => {
		slideUp(test, e.isIntersecting);
	});
}, optionsTestimonial);

observer1.observe(section1);
observer2.observe(section2);
observer3.observe(testSection);
