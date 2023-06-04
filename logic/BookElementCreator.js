import { BookElement } from "./BookElement.js";

export class BookElementCreator {
    constructor(document, library) {
        this.document = document;
        this.library = library;
        this.container = document.querySelector('.book-container');
    }
}

BookElementCreator.prototype.create = function(book) {
    const div = document.createElement('div');
    div.classList.add('book');
    const titlePara = document.createElement('p');
    titlePara.classList.add('shadow-text');
    titlePara.classList.add('title-para');

    const authorPara = document.createElement('p');
    authorPara.classList.add('shadow-text');
    authorPara.classList.add('author-para');

    const pagesPara = document.createElement('p');
    pagesPara.classList.add('shadow-text');
    pagesPara.classList.add('pages-para');
    
    const buttonWrapper = document.createElement('div');
    buttonWrapper.classList.add('button-wrapper')

    const statusButton = document.createElement('button');
    statusButton.classList.add('read-status');

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.textContent = "DELETE";
    
    // Appending created elements to the parent
    div.append(titlePara);
    div.append(authorPara);
    div.append(pagesPara);
    div.append(buttonWrapper);
    buttonWrapper.append(statusButton);
    buttonWrapper.append(deleteButton);

    // Create the book element object
    let bookElement = new BookElement(this.library, div, titlePara, authorPara, pagesPara, statusButton, deleteButton);
    bookElement.update(book);
    this.container.append(div);
}

