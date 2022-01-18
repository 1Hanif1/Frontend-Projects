let counter;
const sliderButtons = document.querySelector(".slider__buttons");
const image = document.querySelector(".image--js");
const testimonialContainer = document.querySelector(".testimonial")

window.addEventListener("load", () => {
    testimonialContainer.classList.add("animation--js");
    testimonialContainer.style.opacity = 0;
    counter = 0;
})

const people = [
    {
        "testimonial": "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
        "name": "Tanya Sinclair",
        "designation": "UX Engineer",
        "img": "./images/image-tanya.jpg"
    },
    {
        "testimonial": "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
        "name": "John Tarkpor",
        "designation": "Junior Front-end Developer",
        "img": "./images/image-john.jpg"
    }
]

const clearText = function () {
    testimonialContainer.innerHTML = "";
}

const getHtml = function (counter) {
    const html = `
    <p class="testimonial__description testimonial--js">${people[counter].testimonial}</p>
    <h2 class="testimonial__title name--js"> ${people[counter].name} <span class="designation--js">${people[counter].designation}</span></h2>
    `;
    return html;
}

const render = function () {
    const html = getHtml(counter);

    testimonialContainer.insertAdjacentHTML("afterbegin", html);
    image.setAttribute('src', `${people[counter].img}`);

    image.animate([
        {
            transform: 'scale(1.1)',
            opacity: 0,
        },
        {
            transform: 'scale(1)',
            opacity: 1,
        }
    ], {
        duration: 500,
        fill: "forwards"
    })

    testimonialContainer.animate([
        {
            opacity: 0,
        },
        {
            opacity: 1,
        }], { duration: 1000, fill: 'forwards' })
}

sliderButtons.addEventListener("click", (e) => {
    if (!e.target.dataset.btn) return;
    if (e.target.dataset.btn == "left") {

        clearText();

        counter = counter <= 0 ? (people.length - 1) : counter - 1;

        render()


    } else {

        clearText()

        counter = counter == (people.length - 1) ? 0 : counter + 1;

        render()
    }
})
