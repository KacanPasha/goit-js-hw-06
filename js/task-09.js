const bodyEl = document.querySelector("body");
const changeColor = document.querySelector(".change-color")
const colorName = document.querySelector(".color")
console.log(bodyEl)
console.log(changeColor)
console.log(colorName)

changeColor.addEventListener("click", (event) => {
    
  colorName.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = getRandomHexColor()
});





function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
