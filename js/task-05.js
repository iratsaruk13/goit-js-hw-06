const inputEl = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onNameChange);

function onNameChange(event) {
  nameEl.textContent = event.currentTarget.value.trim();
  // console.log(event.currentTarget.value.length);
  if (nameEl.textContent === "") {
    nameEl.textContent = "Anonymous";
  }
}
