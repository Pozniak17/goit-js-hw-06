const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

function makeMarkup(array) {
  array.map((element) => {
    const newItem = document.createElement("li");
    newItem.textContent = element;
    newItem.classList.add("item");
    listEl.append(newItem);
  });
}

makeMarkup(ingredients);
