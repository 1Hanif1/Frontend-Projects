'use strict';
const features = document.querySelectorAll('.feature');
const section_one = document.querySelector('.section__one');
const section_one_observer_function = (entry) => {
    if (entry[0].isIntersecting) {
        let delay = 200;
        features.forEach(
            feature => {
                setTimeout(() => {
                    feature.classList.remove('set-fade-in')
                }, delay)
                delay += 300
            }
        );
    } else {
        features.forEach(
            feature => {
                feature.classList.add('set-fade-in')
            }
        );
    }
}
const section_one_observer = new IntersectionObserver(section_one_observer_function, { root: null, threshold: 0.3 })

const section_two = document.querySelector('.section__two');
const section_two_image = document.querySelector('.section__two__image');
const section_two_text = document.querySelector('.section__two__text');
const section_two_observer_function = (entry) => {
    if (entry[0].isIntersecting) {
        section_two_image.classList.remove('set-slide-right');
        section_two_text.classList.remove('set-slide-left');
    }
    else {
        section_two_image.classList.add('set-slide-right');
        section_two_text.classList.add('set-slide-left');
    }
}
const section_two_observer = new IntersectionObserver(section_two_observer_function, { root: null, threshold: 0.3 })

const testimonial = document.querySelector('.testimonial');
const testimonial_cards = document.querySelectorAll('.testimonial__card');
const testimonial_observer_function = entry => {
    if (entry[0].isIntersecting) {
        let delay = 200;
        testimonial_cards.forEach(card => {
            setTimeout(() => card.classList.remove('set-slide-up'), delay)
            delay += 200;
        })
    } else {
        testimonial_cards.forEach(card => {
            card.classList.add('set-slide-up');
        })
    }
}
const testimonial_observer = new IntersectionObserver(testimonial_observer_function, { root: null, threshold: 0.4 })


window.addEventListener('load', () => {
    features.forEach(feature => feature.classList.add('set-fade-in'));
    section_two_image.classList.add('set-slide-right')
    section_two_text.classList.add('set-slide-left')
    early_access_card.classList.add('.set-slide-down');
    testimonial_cards.forEach(card => {
        card.classList.add('set-slide-up');
    })
})

section_one_observer.observe(section_one)
section_two_observer.observe(section_two);
testimonial_observer.observe(testimonial)