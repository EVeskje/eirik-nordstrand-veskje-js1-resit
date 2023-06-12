const container = document.querySelector(".punchline-container");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

const url = `https://api.noroff.dev/api/v1/jokes/${id}`;
let joke;
console.log(url);

async function fetchJoke() {
  try {
    const response = await fetch(url);
    joke = await response.json();
    console.log(joke);
    createHtml(joke);
  } catch (error) {
    console.log(error);
  }
}

fetchJoke();

function createHtml(joke) {
  container.innerHTML = `<div class="card">
    <h1 class="card-type">${joke.type}</h1>
    <div class="card-joke">${joke.setup}</div>
    <div id="punchline">
      <button class="punchline" onclick="showPunchline()">Show punchline</button>
    </div>
  </div>`;
}

function showPunchline() {
  const element = document.getElementById("punchline");
  element.innerHTML = `<div class="punchline">${joke.punchline}</div>`;
}
