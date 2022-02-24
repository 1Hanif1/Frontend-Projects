'use strict';
const darkModeBtn = document.querySelector(".dark__mode__switch")
const slider = document.querySelector(".dark__mode__switch--button")
const top_cards = document.querySelectorAll(".card__one")
const bottom_cards = document.querySelectorAll(".card__two")
const body = document.querySelector("body")
const title_one = document.querySelector(".header__title")
const title_two = document.querySelector(".title__two")
const top_card_numbers = document.querySelectorAll(".card__one--numbers");
const bottom_card_numbers = document.querySelectorAll(".card__two--numbers")

const theme_change = function (theme) {
    if (theme == "light") {
        darkModeBtn.style.backgroundColor = "hsl(230, 22%, 74%)";
        slider.style.backgroundColor = "hsl(0, 0%, 100%)";

        body.style.backgroundColor = "hsl(0, 0%, 100%)";
        title_one.style.color = "hsl(230, 17%, 14%)";
        title_two.style.color = "hsl(228, 12%, 44%)";

        top_cards.forEach(card => {
            card.style.backgroundColor = "hsl(225, 100%, 98%)";
            card.querySelector(".card__one--numbers").style.color = "hsl(230, 17%, 14%)";
        })

        bottom_cards.forEach(card => {
            card.style.backgroundColor = "hsl(227, 47%, 96%)";
            card.querySelector(".card__two--numbers").style.color = "hsl(230, 17%, 14%)";
        })

    } else {
        darkModeBtn.style.backgroundColor = null;
        slider.style.backgroundColor = null;
        body.style.backgroundColor = null;
        title_one.style.color = null;
        title_two.style.color = null;

        top_cards.forEach(card => {
            card.style.backgroundColor = null;
            card.querySelector(".card__one--numbers").style.color = null;
        })

        bottom_cards.forEach(card => {
            card.style.backgroundColor = null;
            card.querySelector(".card__two--numbers").style.color = null;
        })
    }
}

darkModeBtn.addEventListener("click", function () {

    if (this.dataset.theme == "dark") {
        this.style.left = "70%";
        this.dataset.theme = "light"
        theme_change("light")
    } else {
        this.style.left = "5%";
        this.dataset.theme = "dark"
        theme_change("dark")
    }
}.bind(slider)
);


const counterTimer = function (number, final_text, miliseconds) {
    let final_number = parseInt(number.textContent)
    number.textContent = "0";
    let counter = setInterval(() => {
        number.textContent = (parseInt(number.textContent) + 1);
        if (number.textContent == final_number) {
            number.textContent = final_text;
            clearInterval(counter)
        }
    }, miliseconds)
}
top_card_numbers.forEach(number => {
    if (number.textContent.includes("k")) {
        counterTimer(number, `${number.textContent}`, 50)
    } else {
        counterTimer(number, `${number.textContent}`, 0.001)
    }
})
bottom_card_numbers.forEach(number => {
    if (number.textContent.includes("k")) {
        counterTimer(number, `${number.textContent}`, 200)
    } else {
        counterTimer(number, `${number.textContent}`, 0.001)
    }
})