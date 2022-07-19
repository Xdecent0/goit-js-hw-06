const boxes = document.getElementById("boxes");
const controls = document.getElementById("controls");
const createButton = controls.querySelector(["[data-create]"]);
const destroyButton = controls.querySelector(["[data-destroy]"]);
const input = controls.querySelector("input");
let defaultSize = 0;
let amountOfDivs = 0;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

input.addEventListener("input", (event) => {
  input.setAttribute("count", Number(event.currentTarget.value));
  amountOfDivs = Number(input.getAttribute("count"));
});

function createBoxes(amount) {
  console.log(amount);
  defaultSize = 20;
  const boxesContainer = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.classList.add("box");
    box.style.marginTop = 10 + "px";
    box.style.width = (defaultSize + 10).toString() + "px";
    box.style.height = (defaultSize + 10).toString() + "px";
    boxesContainer.push(box);
    defaultSize += 10;
  }
  boxes.append(...boxesContainer);
}

function deleteChild() {
  const children = document.querySelectorAll(".box");
  for (let child of children) {
    boxes.removeChild(child);
  }
}
createButton.addEventListener("click", function () {
  createBoxes(amountOfDivs);
});

destroyButton.addEventListener("click", deleteChild);
