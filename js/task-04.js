// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const decrementBtnClick = document.querySelector(
  'button[data-action="decrement"'
);

const incrementBtnClick = document.querySelector(
  'button[data-action="increment"'
);

const spanEl = document.querySelector("#value");
console.log(spanEl);

decrementBtnClick.addEventListener("click", () => {
  spanEl.textContent = counterValue -= 1;
});

incrementBtnClick.addEventListener("click", () => {
  spanEl.textContent = counterValue += 1;
});
