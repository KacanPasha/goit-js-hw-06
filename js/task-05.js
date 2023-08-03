const textInput = document.querySelector("#name-input");
const span = document.querySelector("#name-output")



textInput.addEventListener("input", (event) => {
    if (textInput.value === "") {
         span.textContent = "Anonymous"
    }
    else {
        span.textContent = event.currentTarget.value;
    }
       
});
