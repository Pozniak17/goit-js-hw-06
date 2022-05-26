const spanEl = document.querySelector("#text");
const inputEl = document.querySelector("#font-size-control");

inputEl.addEventListener("input", (event) => {
  spanEl.style.fontSize = `${event.currentTarget.value}px`;
  console.log((spanEl.style.fontStyle = `${event.currentTarget.value}px`));
});
