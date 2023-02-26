const colorEl = document.querySelector(".color");
const btnEl = document.querySelector(".change-color");
btnEl.addEventListener("click", onChangeColor);

function onChangeColor() {
  const randomFunction = getRandomHexColor();
  document.body.style.backgroundColor = randomFunction;
  colorEl.textContent = randomFunction;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
