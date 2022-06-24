// DOM getting HTML elements

document.addEventListener('DOMContentLoaded', () => {
  getbooksList();
});

const searchBtn = document.getElementById('search-btn');
const booksList = document.getElementById('books')
const booksDetailsContent = document.querySelector("books-details-content")
const readCloseBtn = document.getElementById('read-close-btn')

// event listners

searchBtn.addEventListener('click', getbooksList)
// getbooksList that matches the search input

function getbooksList(){
  let searchInputText = document.getElementById('search-input').value.trim();
  fetch(`https://api.itbook.store/1.0/search/=${searchInputText}.json`)
  .then(resp => resp.json())
  .then (data => {
    if(data)
    console.log(data);
    let html = "";
    if (data.books) {
      data.books.forEach(book => {
        html+= `
          <div class = "books-item" data-id = "${book.isbn13}">
              <div class = "books-img">
                  <img src = "${book.image}" alt = "food">
              </div>
              <div class = "books-name">
                  <h3>${book.title}</h3>
                  <a href = "#" class = "read-btn">Read more</a>
              </div>
          </div>
        `;
      }); 
      booksList.classList.remove('notFound');
    }else{
      html = "Opps, could not find any books read!";
      booksList.classList.add('notFound');
    }
    booksList.innerHTML = html;
  });
}
