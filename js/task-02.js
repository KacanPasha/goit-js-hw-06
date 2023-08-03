const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulEl = document.querySelector("#ingredients")

  ingredients.forEach((element) => {
  let elementLi = document.createElement("li");
  
  elementLi.textContent = element;
  ulEl.prepend(elementLi);
});
