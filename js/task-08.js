const formEl = document.querySelector(".login-form");
console.log(formEl);

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Заповніть всі поля");
  }

  const dataObj = {
    email: email.value,
    password: password.value,
  };
  console.log(dataObj);
  event.currentTarget.reset();
}
