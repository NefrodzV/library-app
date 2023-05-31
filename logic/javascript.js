import { Library } from './Library.js';
import { Book } from '/logic/Book.js';
import { BookElementCreator } from '/logic/BookElementCreator.js';

const addBook = document.querySelector('#add');
const bookForm = document.querySelector('#book-form');
const layer = document.querySelector(".layer");
const closeButton = document.querySelector(".close");
const bookContainer = document.querySelector(".book-container");

function changeFormVisibility() {
    bookForm.toggleAttribute("visible");
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
submit.addEventListener("click", ()=> {getBookInformation();})

function getBookInformation() {
    let title = document.querySelector('input[name="title"]').value;
    let author = document.querySelector('input[name="author"]').value;
    let pages = document.querySelector('input[name="pages"]').value;

    let book = new Book(title, author, pages);
    library.addBook(book);
    createBookCards();
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


