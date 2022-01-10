// All Globals
let data;
let user_buttons = document.querySelector(".buttons--js");
const cards = {
  "Work": document.querySelector(".card--one"),
  "Play": document.querySelector(".card--two"),
  "Study": document.querySelector(".card--three"),
  "Exercise": document.querySelector(".card--four"),
  "Social": document.querySelector(".card--five"),
  "Self Care": document.querySelector(".card--six"),
};

const loadData = function (timeframe) {

  data.forEach(object => {
    const card = cards[object["title"]];
    const { current: curTime, previous: prevTime } = object["timeframes"][timeframe];
    const html = `
        <div class="card__main">
        <h3 class="card__title">
          ${object["title"]} <img src="./images/icon-ellipsis.svg" alt="Settings" />
        </h3>
        <section class="card__stat">
          <h3 class="stat__main">${curTime}hrs</h3>
          <p class="stat__minor">Last week - <span>${prevTime}</span>hrs</p>
        </section>
      </div>        
        `;
    card.innerHTML = "";
    card.insertAdjacentHTML("afterbegin", html);

  });
}

user_buttons.addEventListener("click", (e) => {
  if (!e.target.classList.contains("btn")) return;
  user_buttons.querySelectorAll(".btn").forEach(btn => btn.style.color = "")
  e.target.style.color = "white";
  let timeStamp = e.target.dataset.id;
  loadData(timeStamp)
})

window.addEventListener("load", async () => {
  data = await (await fetch("./data.json")).json();

  document.querySelector(".btn--two").style.color = "white";

  loadData("weekly");
})




