import { displayError } from "./components/displayError.js";

const dataContainer = document.querySelector(".dataContainer");
const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=eee417cc2fb64593bc1b1b594ac86178";

async function getGames() {
  try {
    const response = await fetch(url);

    const results = await response.json();

    const games = results.results;

    dataContainer.innerHTML = "";

    for (let i = 0; i < games.length; i++) {
      if (i === 8) {
        break;
      }
      dataContainer.innerHTML += `<div class="dataBox">${games[i].name}<br>Rating: ${games[i].rating}<br>No. of tags: ${games[i].tags.length}</div>`;
    }
  } catch (error) {
    dataContainer.innerHTML = displayError(
      "There was an error when calling the API."
    );
  }
}

getGames();
