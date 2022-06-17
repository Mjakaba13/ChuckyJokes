let jokeInput = document.getElementById("joker");
let searchBtn = document.getElementById("seer");
let randomSearch = document.getElementById("randy");
let choices = document.getElementById("olele");
let jokeArea = document.getElementById("jokeArea");
let catBtn = document.getElementById("copycat");
let randyBtn = document.getElementById("randy");

// const JOKE_CATEGORIES = [];

function renderjoke() {
  //add joke to DOM
  const copy = fetch("https://api.chucknorris.io/jokes/random", {
    headers: {
      accept: "application/JSON",
    },
  })
    .then((response) => response.json())
    //append categories to select
    .then((data) => {
      jokeArea.innerHTML = `<p>${data.value}</p>`;
    });
  return copy;
}
function getRandomJoke() {
  const jokes = fetch("https://api.chucknorris.io/jokes/random", {
    headers: {
      accept: "application/JSON",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      jokeArea.innerHTML = `<p>${data.value}</p>`;
    });
  return jokes;
}
function searchJoke() {
  // fetch joke with search param
  const santos = fetch(
    `https://api.chucknorris.io/jokes/search?query=${jokeInput.value}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.result);
      const lukuku = data.result;
      const bone = lukuku.slice(0, 5);
      bone.forEach((element) => {
        jokeArea.innerHTML += `<hr><p>${element.value}</p>`;
      });
    });
}

function getJokeWithCategory() {
  //   // fetch joke with category
  const jackJill = fetch(
    `https://api.chucknorris.io/jokes/random?category=${choices.value}`,
    {
      headers: {
        accept: "application/JSON",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      jokeArea.innerHTML = `<p>${data.value}</p>`;
    });
}

function getCategories() {
  //fetch categories
  const copyCat = fetch("https://api.chucknorris.io/jokes/categories")
    .then((response) => response.json())
    //append categories to select
    .then((data) => {
      const mana = data;
      mana.forEach((element) => {
        choices.innerHTML += `<option value="${element}">${element}</option>`;
      });
    });
  return copyCat;
}
getCategories();
renderjoke();

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  searchJoke();
  jokeInput.value = "";
});

catBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getJokeWithCategory();
});

randyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getRandomJoke();
});
