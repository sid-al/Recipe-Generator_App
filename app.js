// DOM getting HTML elements

const searchBtn = document.querySelector('#search-btn');
const mealList = document.getElementById('meal')
const mealDetailsContent = document.querySelector("meal-details-content")
const recipeCloseBtn = document.getElementById('recipe-close-btn')

// event listners
searchBtn.addEventListener('click', renderMeal)

