const logInForm = document.querySelector("#log-in");

logInForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = logInForm.email.value;
  const password = logInForm.password.value;

  const options = {
    method: "post",
    body: JSON.stringify({ email, password }),
    headers: { "Content-Type": "application/json" },
  };
  fetch("/logged", options)
    .then((data) => {
      console.log(data);
      window.location.href = "/authorized";
    })
    .catch((err) => console.error);
});
