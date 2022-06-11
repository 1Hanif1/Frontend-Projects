'use strict';
const API_KEY = "at_fjVfF8uicjCnAyu7h1gXfQfvroFS1"
const userInput = document.querySelector('#ipinput');
const userButton = document.querySelector('#btn');
const ipValue = document.querySelector('.header__data__ip');
const locationValue = document.querySelector('.header__data__location');
const timezoneValue = document.querySelector('.header__data__timezone');
const ispValue = document.querySelector('.header__data__isp');
let map = L.map('map')
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

const getLocation = async function (ip) {
    let data = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ip}`)
    let jsonData = await data.json();
    return jsonData;
}

const renderData = function (data) {
    ipValue.textContent = data.ip;
    locationValue.textContent = `${data.location.city}, ${data.location.region} ${data.location.postalCode}`;
    timezoneValue.textContent = `UTC ${data.location.timezone}`;
    ispValue.textContent = data.isp;
}

const renderMap = function (data) {
    const latitude = data.location.lat;
    const longitude = data.location.lng;
    map.setView([latitude, longitude], 13);
    L.marker([latitude, longitude]).addTo(map);
}

userButton.addEventListener('click', async () => {
    let ipaddress = userInput.value;
    if (ipaddress === "" || !(/^((25[0-5]|(2[0-4]|1[0-9]|[1-9]|)[0-9])(\.(?!$)|$)){4}$/.test(ipaddress))) {
        userInput.value = "Invalid ip address";
        setTimeout(() => {
            userInput.value = "";
        }, 1000)
        return
    }

    let locationData = await getLocation(ipaddress);
    console.log(locationData);
    renderData(locationData);
    renderMap(locationData);
})


