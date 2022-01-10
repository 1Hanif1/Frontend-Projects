// All Globals
let data;
let user_buttons = document.querySelector(".main__user.bottom")


const cards = {
    work: document.querySelector(".card--one"),
    play: document.querySelector(".card--two"),
    study: document.querySelector(".card--three"),
    exercise: document.querySelector(".card--four"),
    social: document.querySelector(".card--five"),
    selfCare: document.querySelector(".card--six")
}

const getData = async () => {
    data = await fetch("./data.json")
    data = await data.json()
}

