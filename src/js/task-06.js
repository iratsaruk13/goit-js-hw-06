const inputEl = document.querySelector("#validation-input");
const validValue = inputEl.getAttribute("data-length");

inputEl.addEventListener("blur", onValidInput);

function onValidInput(event) {
  inputEl.classList.remove("valid", "invalid");
  event.currentTarget.value.trim().length === Number(validValue)
    ? inputEl.classList.add("valid")
    : inputEl.classList.add("invalid");
}
