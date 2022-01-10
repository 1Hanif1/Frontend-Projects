/////////////////////////////// Variables
// Global data variable which is used to store Data JSON 
let data;

// Container which contains the three buttons "daily", "weekly" and "monthly"
let user_buttons = document.querySelector(".buttons--js");

// cards JS object including all card elements
const cards = {
  "Work": document.querySelector(".card--one"),
  "Play": document.querySelector(".card--two"),
  "Study": document.querySelector(".card--three"),
  "Exercise": document.querySelector(".card--four"),
  "Social": document.querySelector(".card--five"),
  "Self Care": document.querySelector(".card--six"),
};

/////////////////////////////// Functions
const loadData = function (timeframe) {

  // Iterate through all objects from data json
  data.forEach(object => {

    // Get the card from cards object based on the current object from data json
    const card = cards[object["title"]];

    // Get time data for the current timeframe
    const { current: curTime, previous: prevTime } = object["timeframes"][timeframe];

    // Generate markup based on data
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

    // Empty the dummy html that already exists in card element    
    card.innerHTML = "";

    // Insert the newly created markup
    card.insertAdjacentHTML("afterbegin", html);

  });
}

user_buttons.addEventListener("click", (e) => {
  // If click event didn't happen on any buttons then just return 
  if (!e.target.classList.contains("btn")) return;

  // Remove "white" (active button) color from all buttons. if exists
  user_buttons.querySelectorAll(".btn").forEach(btn => btn.style.color = "")

  // set the clicked button to "white"
  e.target.style.color = "white";

  // Get timestamp from data set of button. eg: "daily"
  let timeStamp = e.target.dataset.id;

  // Call loadData function with that timestamp to display data for that timestamp
  loadData(timeStamp)
})

/////////////////////////////// On page load initializer function
window.addEventListener("load", async () => {
  // Fetch json file. Convert it to JS object. store it to data variable
  data = await (await fetch("./data.json")).json();

  // Set color of "weekly" button to white
  document.querySelector(".btn--two").style.color = "white";

  // Load "weekly" data in to the UI
  loadData("weekly");
})




