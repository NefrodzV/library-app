import { Library } from './Library';
import { Book } from './Book.js';
import { BookElementCreator } from './BookElementCreator.js';

const addBook = document.querySelector('#add');
const form = document.querySelector('#book-form');
const layer = document.querySelector(".layer");
const closeButton = document.querySelector(".close");
const bookContainer = document.querySelector(".book-container");
const errorMessage = document.querySelector('.error-message');
errorMessage.classList.add("text-shadow");

function changeVisibility(element) {
    element.toggleAttribute("visible");
}

addBook.addEventListener("click", () => {
   changeVisibility(form);
   changeVisibility(layer);
})

closeButton.addEventListener("click", () => {
    changeVisibility(form);
    changeVisibility(layer); 
})
// Enter book logic
const library = new Library();
const bookElementCreator = new BookElementCreator(document, library);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Object.fromEntries is an etirable and FormData is the etirable stucture
    let data = Object.fromEntries(new FormData(e.target)); // Represent data as an object
    startFlow(data);
})

let bookExample = new Book("Harry Potter", "Jk. Rowling", "800")
library.addBook(bookExample);
bookElementCreator.create(bookExample);

function startFlow(data) { 
    // If this book is registered already show message and return
    if(library.has(data.title)) {
        changeVisibility(errorMessage);
        return;
    }
    let book = new Book(data.title, data.author, data.pages);
    library.addBook(book);
    bookElementCreator.create(book);
    changeVisibility(form);
    changeVisibility(layer);
    form.reset();
    if(errorMessage.hasAttribute('visible')) {
        changeVisibility(errorMessage);
    }
}




