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
const bookElementCreator = new BookElementCreator();

const submit = document.querySelector('#submit');
// submit.addEventListener("click", ()=> {getBookInformation();})


form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Object.fromEntries is an etirable and FormData is the etirable stucture
    let data = Object.fromEntries(new FormData(e.target)); // Represent data as an object
    startFlow(data);
})

function startFlow(data) {
    let book = new Book(data.title, data.author, data.pages);

    library.addBook(book);
    // createBookCards();
}

function createBookCards() {
    library.books.forEach(book => {
        bookElementCreator.create(document ,book);
    });
    displayBookCards();
}

function displayBookCards() {
    bookElementCreator.elements.forEach(element => {
        bookContainer.append(element);
    });
}


