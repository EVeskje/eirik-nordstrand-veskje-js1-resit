const jokesContainer = document.querySelector(".jokes-container");
const jokeUrl = "https://api.noroff.dev/api/v1/jokes";

let jokes = [];
let type = "all";

async function getAllJokes() {
  try {
    const response = await fetch(jokeUrl);
    jokes = await response.json();

    displayJokes(type);
  } catch (error) {
    alert("No more Funny Fiesta for you...");
  }
}

getAllJokes();

function displayJokes(type) {
  const jokesToDisplay = getJokes(type);
  jokesContainer.innerHTML = "";

  for (let i = 0; i < jokesToDisplay.length; i++) {
    if (i === 30) break;
    const joke = jokesToDisplay[i];
    jokesContainer.innerHTML += `<div class="card"><div class="card-type">${joke.type}</div>
                               <div class="card-setup">${joke.setup}</div>
                               <a href="joke.html?id=${joke.id}" class="card-punchline"><h3>Get punchline</h3></a></div></div>`;
  }
}

function getJokes(type) {
  if (type !== "all") return jokes.filter((joke) => joke.type === type);

  return jokes;
}

function showLoader() {
  jokesContainer.innerHTML = '<div class="loader"></div>';
}

function hideLoader() {
  const loaders = document.querySelectorAll(".loader");
  loaders.forEach((loader) => loader.remove());
}

window.addEventListener("DOMContentLoaded", () => {
  showLoader();
  fetchData().finally(hideLoader);
});
