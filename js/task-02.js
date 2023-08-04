const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulEl = document.querySelector("#ingredients");

const liElements = ingredients.map((element) => {
  const liElement = document.createElement("li");
  liElement.textContent = element;
  liElement.classList.add("item");
  return liElement;
});

ulEl.append(...liElements);
