// 1. select the hide password icom
const hidePassword = document.getElementById("toggle-password");

// 2. select the input field of target
const inputField = document.getElementById("password");

const repeatPassword = document.getElementById("repeat-password");

//3.  onclick of the hidepassword icon a function should be called
hidePassword.addEventListener("click", () => {
  if (inputField.type === "password") {
    inputField.type = "text";
  } else {
    inputField.type = "password";
  }
});

function checkPasswordsMatch() {
  if (repeatPassword.value !== inputField.value) {
    alert("Passwords do not match");
  }
}
