const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const makeListOfIngredients = elements => {
  return elements.map(element => {
    const ingredientEl = document.createElement('li');
    ingredientEl.classList.add('item');
    ingredientEl.textContent = element;

    return ingredientEl;

  })
}

const elements = makeListOfIngredients(ingredients);
const ingredientsListEl = document.querySelector('#ingredients');
ingredientsListEl.append(...elements);







// const ingredientsListEl = document.querySelector('#ingredients');

// const createItem = (item) => {
//   const ingredientItemEl = document.createElement('li');
//   ingredientItemEl.textContent = item;
//   ingredientItemEl.classList.add('item');
//   return ingredientItemEl;
// }

// const newItems = (array) => {
//   ingredientsListEl.append(...array.map((element) => createItem(element)))
// }

// newItems(ingredients);




