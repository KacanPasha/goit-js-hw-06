
const number = document.querySelectorAll(".item");
console.log(`Number of categories: ${number.length}`)

number.forEach((element) => {
 let numberLi = 0;
 let h2Text = '';

 numberLi = element.querySelectorAll('li').length || 0;
 h2Text = element.firstElementChild.textContent;

 console.log(`Category: ${h2Text}`)
 console.log(`Elements: ${numberLi}`)
 
});
