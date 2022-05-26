const inputEl = document.querySelector("#name-input");
console.log(inputEl);

const spanEl = document.querySelector("#name-output");
console.log(spanEl);

inputEl.addEventListener("input", (event) => {
  spanEl.textContent = event.currentTarget.value;

  if (event.currentTarget.value === "") {
    spanEl.textContent = "Anonymous";
  }
});
