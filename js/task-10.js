const parentDiv = document.getElementById("boxes");
const controls = document.getElementById("controls");
const createButton = controls.querySelector(["[data-create]"]);
const destroyButton = controls.querySelector(["[data-destroy]"]);
const input = controls.querySelector("input");
let amountOfDivs = 0;
const divCounts = [];
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  let defaultSize = 20;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.color = getRandomHexColor();
    box.classList.add("box");

    box.style.width = (defaultSize + 10).toString() + "px";
    box.style.height = (defaultSize + 10).toString() + "px";
    divCounts.push(box);
    defaultSize += 10;
  }
  parentDiv.append(...divCounts);
}
function deleteChild() {
  let child = parentDiv.lastElementChild;
  while (child) {
    parentDiv.removeChild(child);
    child = parentDiv.lastElementChild;
    amountOfDivs = 0;
    input.value = "";
  }
}
createButton.addEventListener("click", function (e) {
  amountOfDivs = input.value;
  createBoxes(amountOfDivs);
});

destroyButton.addEventListener("click", deleteChild);
