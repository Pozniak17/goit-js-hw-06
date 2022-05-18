const listEl = document.querySelectorAll(".item");

//! в функції
function makeCategoriesNumber(element) {
  console.log("Number of categories:", listEl.length);

  element.forEach((item) => {
    console.log("Category:", item.firstElementChild.textContent);
    console.log("Elements:", item.lastElementChild.children.length);
  });
}

makeCategoriesNumber(listEl);

//! без функції
// listEl.forEach((item) => {
//   console.log("Category:", item.firstElementChild.textContent);

//   console.log("Elements:", item.lastElementChild.children.length);
// });
