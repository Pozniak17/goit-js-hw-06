//! Отримання рандомного кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

//* Напиши скрипт створення і очищення колекції елементів.
//* Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція.
//* Натисненням на кнопку Очистити, колекція елементів очищається.

//! Посилання на елементи
const refs = {
  inputRef: document.querySelector("input"),
  btnCreateRef: document.querySelector("button[data-create]"),
  btnDestroyRef: document.querySelector("button[data-destroy]"),
  divRef: document.querySelector("#boxes"),
};

//! Слухачі подій
refs.inputRef.addEventListener("click", onInput);
refs.btnCreateRef.addEventListener("click", () => createBoxes(amount));
refs.btnDestroyRef.addEventListener("click", destroyBoxes);

let amount = 0;

function onInput(event) {
  amount = Number(event.currentTarget.value);
}

/*
 *Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes. */

//! Функція створення розмітки
function createBoxes(amount) {
  let emptyBox = [];
  for (let i = 1; i <= amount; i += 1) {
    const newDivEl = document.createElement("div");
    newDivEl.style.height = `${i * 10 + 30}px`;
    newDivEl.style.width = `${i * 10 + 30}px`;
    newDivEl.style.background = `${getRandomHexColor()}`;
    emptyBox.push(newDivEl);
  }
  refs.divRef.append(...emptyBox);
}

function destroyBoxes() {
  refs.divRef.innerHTML = "";
  refs.inputRef.value = 0;
  amount = 0;
}

/*
 * Розміри найпершого <div> - 30px на 30px.
 * Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
 * Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
 */
