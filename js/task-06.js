const textInput = document.querySelector("#validation-input");
const inputLength = textInput.getAttribute('data-length');



// console.log(inputLength)
// console.log(textInput)


textInput.addEventListener("input", (event) => {
    if (textInput.value.length === Number(inputLength)) {
        textInput.classList.remove("invalid");
        textInput.classList.add("valid");
    } else {
        textInput.classList.remove("valid");
        textInput.classList.add("invalid");
    }
});



