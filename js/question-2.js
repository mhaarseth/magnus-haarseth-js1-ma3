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
      dataContainer.innerHTML += `<div class="dataContainer">${games[i].name} - ${games[i].rating} - ${games[i].tags.length}</div>`;
    }
  } catch (error) {
    dataContainer.innerHTML += `<div class="error">An error occured</div>`;
  }
}

getGames();
