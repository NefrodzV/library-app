import { Library } from './Library.js';
import { Book } from '/logic/Book.js';
import { BookElementCreator } from '/logic/BookElementCreator.js';

const addBook = document.querySelector('#add');
const form = document.querySelector('#book-form');
const layer = document.querySelector(".layer");
const closeButton = document.querySelector(".close");
const bookContainer = document.querySelector(".book-container");

function changeFormVisibility() {
    form.toggleAttribute("visible");
    layer.toggleAttribute("visible");    
}

addBook.addEventListener("click", () => {
   changeFormVisibility();
})

closeButton.addEventListener("click", () => {
    changeFormVisibility(); 
})
// Enter book logic
const library = new Library();
const bookElementCreator = new BookElementCreator(document, library);

const submit = document.querySelector('#submit');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Object.fromEntries is an etirable and FormData is the etirable stucture
    let data = Object.fromEntries(new FormData(e.target)); // Represent data as an object
    startFlow(data);
})

function startFlow(data) {
    let book = new Book(data.title, data.author, data.pages);

    if (library.has(book.title) === false) {
        library.addBook(book);
        console.log("book doesnt exist");
        bookElementCreator.create(book);
    }
}




