const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
const counter = document.querySelector("#value");

let counterValue = 0;

buttonDecrement.addEventListener("click", onDecrementBtnClick);

buttonIncrement.addEventListener("click", onIncrementBtnClick);

function onDecrementBtnClick() {
  counterValue -= 1;
  counter.textContent = counterValue;
  console.log(counter.textContent);
}

function onIncrementBtnClick() {
  counterValue += 1;
  counter.textContent = counterValue;
  console.log(counter.textContent);
}
