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
mealList.addEventListener('click', getMealRecipe);
// getMealList that matches the search input

function getMealList(){
  let searchInputText = document.getElementById('search-input').value.trim();
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputText}`)
  .then(resp => resp.json())
  .then (data => {
    if(data)
    console.log(data);
    let html = "";
    if (data.meals) {
      data.meals.forEach(meal => {
        html+= `
          <div class = "meal-item" data-id = "${meal.idMeal}">
              <div class = "meal-img">
                  <img src = "${meal.strMealThumb}" alt = "food">
              </div>
              <div class = "meal-name">
                  <h3>${meal.strMeal}</h3>
                  <a href = "#" class = "recipe-btn">Get Recipe</a>
              </div>
          </div>
        `;
      }); 
      mealList.classList.remove('notFound');
    }else{
      html = "Opps, could not find any meal recipe!";
      mealList.classList.add('notFound');
    }
    mealList.innerHTML = html;
  });
}

function getMealRecipe(e) {
  e.preventDefault();
  if(e.target.classList.contains('recipe-btn')){
    let mealItem = e.target.parentElement.parentElement;
    console.log(mealItem);
  }
}
