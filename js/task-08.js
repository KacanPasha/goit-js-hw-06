const login = document.querySelector(".login-form");

login.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const form = event.target;
  const emailInput = form.elements.email;
  const passwordInput = form.elements.password;
    
  if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
    alert("fill in the input field");
  } else {
    const textEmail = emailInput.value;
    const textPassword = passwordInput.value;
    console.log(textEmail);
    console.log(textPassword);
  }
});




