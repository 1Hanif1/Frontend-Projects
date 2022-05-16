'use strict';
const navigationLinks = document.querySelector('.nav__links')
const hamburgerMenu = document.querySelector('.nav__hamburger')
const inputBox = document.querySelector('#userinput')
const inputError = document.querySelector('.error')
const shortenBtn = document.querySelector('.main__cta')
const linksContainer = document.querySelector('.main')

inputBox.addEventListener('click', () => {
    inputBox.value = '';
})
hamburgerMenu.addEventListener('click', () => {
    navigationLinks.classList.toggle('hide-nav');
})
const showError = () => {
    inputError.classList.remove('hide')
    inputBox.style.border = '0.1em solid Red';
    setTimeout(() => {
        inputError.classList.add('hide')
        inputBox.style.border = '';
    }, 1000)
}
const renderHtml = function (data) {
    const originalLink = data["original_link"]
    const shortenedLink = data["full_short_link2"]
    const html = `
    <div class="shortened__link">
        <p class="shortened__link-main">${originalLink}</p>
        <div class="shortened__link-short">
            <p>${shortenedLink}</p>
            <span class="copy__button">Copy</span>
        </div>
    </div>
    `
    linksContainer.insertAdjacentHTML("beforeend", html);
}
const getShortenedLink = async function (link) {
    let data = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
    let dataJson = await data.json()
    if (!dataJson["ok"]) {
        showError()
        return
    }
    renderHtml(dataJson["result"])
}
/**
 * {
    "ok": true,
    "result": {
        "code": "I8ryml",
        "short_link": "shrtco.de/I8ryml",
        "full_short_link": "https://shrtco.de/I8ryml",
        "short_link2": "9qr.de/I8ryml",
        "full_short_link2": "https://9qr.de/I8ryml",
        "short_link3": "shiny.link/I8ryml",
        "full_short_link3": "https://shiny.link/I8ryml",
        "share_link": "shrtco.de/share/I8ryml",
        "full_share_link": "https://shrtco.de/share/I8ryml",
        "original_link": "https://www.frontendmentor.com"
    }
}
 */

shortenBtn.addEventListener('click', () => {
    let userInput = inputBox.value;
    if (!userInput) {
        showError()
        return
    }

    // Make API Call
    getShortenedLink(userInput)
})

window.addEventListener('load', () => {
    if (window.innerWidth < 800)
        navigationLinks.classList.add('hide-nav')
    inputError.classList.add('hide')
})