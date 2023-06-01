import { BookElement } from "./BookElement.js";

export class BookElementCreator {
    
    constructor(document) {
        this.document = document;
        this.container = document.querySelector('.book-container');
    }
    static deleteBookElement(div) {
        div.remove();
    }
}
BookElementCreator.prototype.elements = [];
BookElementCreator.prototype.updateElement = function(
    titlePara,
    authorPara,
    pagesPara,
    statusButton,
    deleteButton,
    book) {
     titlePara.textContent = book.getTitle();
     authorPara.textContent = book.getAuthor();
     pagesPara.textContent = book.getPages();
     statusButton.textContent = book.status.READING;
    }
BookElementCreator.prototype.create = function(book) {
    const div = document.createElement('div');
    div.classList.add('book');
    div.setAttribute("id", book.title);
    const titlePara = document.createElement('p');
    titlePara.classList.add('shadow-text');
    titlePara.setAttribute('id','para-title');

    const authorPara = document.createElement('p');
    authorPara.classList.add('shadow-text');
    authorPara.setAttribute('id','para-author');

    const pagesPara = document.createElement('p');
    pagesPara.classList.add('shadow-text');
    pagesPara.setAttribute('id','para-pages');
    
    const buttonWrapper = document.createElement('div');
    buttonWrapper.classList.add('button-wrapper')

    const statusButton = document.createElement('button');
    statusButton.classList.add('read-status');

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.textContent = "DELETE";
    deleteButton.addEventListener('click',(e) => {
        this.document
        
    })

    div.append(titlePara);
    div.append(authorPara);
    div.append(pagesPara);
    div.append(buttonWrapper);
    buttonWrapper.append(statusButton);
    buttonWrapper.append(deleteButton);

    let bookElement = new BookElement(book.title, div, titlePara, authorPara, pagesPara, statusButton, deleteButton);
    bookElement.update(book);
    this.container.append(div);
    this.elements.push(bookElement);
}

