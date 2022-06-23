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
booksList.addEventListener('click', getbooksread);
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

function getbooksread(e) {
  e.preventDefault();
  if(e.target.classList.contains('read-btn')){
    let booksItem = e.target.parentElement.parentElement;
    console.log(booksItem);
    fetch(`https://api.itbook.store/1.0/search/=${booksItem.isbn13}.json`)
    .then(resp => resp.json())
    .then(data => bookReadModal(data))
  }
}

// create a modal
function bookReadModal(book) {
  console.log(book)
  book = book[0];
  let html = `
  
  <div class = "books-details-content">
        <h2 class="read-title">${book.title}</h2>
        <p class="read-category"></p>
        <h3>description</h3>
        <p> ${book.subtitle}.</p>
    </div>
    <div class = 'read-books-img'>
      <img src="${book.image}" alt="">
    </div>
    <div class="read-link">
      <a href="${book.url}" target="_blank">Get Book</a>
  </div>

  `;
  console.log(booksDetailsContent.innerHTML = html); 
  booksDetailsContent.parentElement.classList.add('showRead')
  
}