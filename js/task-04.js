let counterValue = 0;
let value = document.querySelector("#value");
let decrement = document.querySelector('button[data-action="decrement"]');
let increment = document.querySelector('button[data-action="increment"]');

decrement.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});

increment.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});
  