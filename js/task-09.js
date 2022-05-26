function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChangeColorRef = document.querySelector(".change-color");
buttonChangeColorRef.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  const spanRef = document.querySelector(".color");
  spanRef.textContent = getRandomHexColor();
});
