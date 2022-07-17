const textInput = document.getElementById("validation-input");
const symbolsCount = Number(textInput.dataset.length);
textInput.addEventListener("blur", () => {
  if (textInput.value.length === symbolsCount) {
    textInput.classList.add("valid");
  } else {
    textInput.classList.add("invalid");
  }
});
