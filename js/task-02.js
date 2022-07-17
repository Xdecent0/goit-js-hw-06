const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.getElementById("ingredients");
let listArray = [];

for (let ingredient of ingredients) {
  const ingredientsItem = document.createElement("li");
  ingredientsItem.innerText = ingredient;
  ingredientsItem.classList.add("item");
  listArray.push(ingredientsItem);
}
ingredientsList.append(...listArray);
