const inputEl = document.querySelector('#controls input[type="number"]');
const btnCreateEl = document.querySelector("[data-create]");
const btnDestroyEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

function createBoxes(amount) {
  let size = 30;
  let arrayBoxes = [];
  for (let i = 1; i <= amount; i += 1) {
    let color = getRandomHexColor();
    arrayBoxes.push(
      `<div id="boxes-element" style="width:${size}px; height:${size}px; background-color:${color};"></div>`
    );
    size += 10;
  }
  return arrayBoxes.join("");
}
btnCreateEl.addEventListener("click", onCreateBoxesClick);
btnDestroyEl.addEventListener("click", onDestroyBoxesClick);
function onCreateBoxesClick() {
  boxesEl.insertAdjacentHTML("afterbegin", createBoxes(inputEl.value));
  inputEl.value = "";
}
function onDestroyBoxesClick() {
  inputEl.value = "";
  boxesEl.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
