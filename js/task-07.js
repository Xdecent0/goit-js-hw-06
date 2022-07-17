const inputRange = document.getElementById("font-size-control");
const text = document.getElementById("text");
text.style.fontSize = `${inputRange.value}px`;

inputRange.addEventListener("change", function () {
  text.style.fontSize = `${inputRange.value}px`;
});
