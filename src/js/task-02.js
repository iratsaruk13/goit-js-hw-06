const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const ingredientsListEl = document.querySelector('#ingredients');

const createItem = (item) => {
  const ingredientItemEl = document.createElement('li');
  ingredientItemEl.textContent = item;
  ingredientItemEl.classList.add('item');
  return ingredientItemEl;
}

const newItems = (array) => {
  ingredientsListEl.append(...array.map((element) => createItem(element)))
}

newItems(ingredients);

// console.log(ingredientsListEl);

// ingredients.forEach((ingredient) => {
// // console.log(ingredient);
// const liEl = document.createElement('li');
// liEl.classList.add('item');
// liEl.textContent = ingredient;
//   // console.log(liEl);
// });

// const listEl = document.querySelector('#ingredients');
// console.log(listEl);
// // newLiEl.appendChild(liEl);






