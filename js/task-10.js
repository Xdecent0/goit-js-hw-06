const boxes = document.getElementById("boxes");
const controls = document.getElementById("controls");
const createButton = controls.querySelector(["[data-create]"]);
const destroyButton = controls.querySelector(["[data-destroy]"]);
const input = controls.querySelector("input");
let defaultSize = 30;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputChangeValue = (e) => {
  input.setAttribute("count", Number(e.currentTarget.value));
};

input.addEventListener("input", inputChangeValue);
function createBoxes() {
  let amount = Number(input.getAttribute("count"));
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.classList.add("box");
    box.style.marginTop = 10 + "px";
    box.style.width = (defaultSize + 10).toString() + "px";
    box.style.height = (defaultSize + 10).toString() + "px";
    boxes.append(box);
    defaultSize += 10;
  }
}

function deleteChild() {
  const children = document.querySelectorAll(".box");
  for (let child of children) {
    boxes.removeChild(child);
  }
  defaultSize = 30;
  input.value = "";
}
createButton.addEventListener("click", createBoxes);

destroyButton.addEventListener("click", deleteChild);
