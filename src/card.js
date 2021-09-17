const endpoint = "https://jsonplaceholder.typicode.com/posts";

//Dom Object
const gridCards = document.querySelector(".cards");
const searchInput = document.getElementById("search-id");

const post = [];

fetch(endpoint)
  .then((data) => data.json())
  .then((datas) => {
    post.push(...datas), createCartElements(datas);
  });

let createCartElements = (post) => {
  let newData = [...post];
  let tenData = newData.slice(0, 9);

  for (let i = 0; i < tenData.length; i++) {
    let value = tenData[i];
    let card = document.createElement("div");
    let img = document.createElement("img");
    let cardDetail = document.createElement("div");
    let content = document.createElement("p");
    let content2 = document.createElement("p");
    img.src = "https://fakeimg.pl/400x300/009578/fff/";
    card.className = "card";
    img.className = "card__image";
    cardDetail.className = "card__content";
    content.innerHTML = value.title;
    content2.innerHTML = value.body;
    cardDetail.appendChild(content);
    cardDetail.appendChild(content2);
    card.appendChild(img);
    card.appendChild(cardDetail);

    gridCards.appendChild(card);
  }
};

function searchCard() {
  let newData = [...post];
  let tenData = newData.slice(0, 9);
  let searchInputValue = searchInput.value;
  filteredData = tenData.filter(
    (data) =>
      data.body.includes(searchInputValue.toLowerCase()) ||
      data.title.includes(searchInputValue.toLowerCase())
  );
  gridCards.innerHTML = "";
  createCartElements(filteredData);
}

searchInput.addEventListener("keyup", searchCard);
