const inputRange = document.getElementById("font-size-control");
const text = document.getElementById("text");
text.style.fontSize = `${inputRange.value}px`;

inputRange.addEventListener("input", function () {
  text.style.fontSize = `${inputRange.value}px`;
});
