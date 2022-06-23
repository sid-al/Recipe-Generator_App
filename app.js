// DOM getting HTML elements

document.addEventListener('DOMContentLoaded', () => {
  getMealList();
});

const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal')
const mealDetailsContent = document.querySelector("meal-details-content")
const recipeCloseBtn = document.getElementById('recipe-close-btn')

// event listners

searchBtn.addEventListener('click', getMealList)
// getMealList that matches the search input

function getMealList(){
  let searchInputText = document.getElementById('search-input').value.trim();
  fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i')
  .then(resp => resp.json())
  .then (data => {
    let html = "";
    
  })
}


