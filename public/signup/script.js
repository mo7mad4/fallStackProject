const signUpForm = document.querySelector("#sign-up");

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = signUpForm.username.value;
  const email = signUpForm.email.value;
  const password = signUpForm.password.value;

  const options = {
    method: "post",
    body: JSON.stringify({ username, email, password }),
    headers: { "Content-Type": "application/json" },
  };

  fetch("/signed", options)
    .then((data) => {
      console.log(data);
      window.location.href = "/authorized";
    })
    .catch((err) => console.error);
});
