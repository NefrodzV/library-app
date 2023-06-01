import { BookElementCreator } from "./BookElementCreator.js";

export class BookElement {
    constructor(id ,card ,title, author,  pages, statusButton, deleteButton) {
        this.id = id;
        this.card = card;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = statusButton;
        
        this.delete = deleteButton;
        this.delete.addEventListener('click', (e)=> {
            BookElementCreator.deleteBookElement(this.card);
        })
    }

    update(book) {
     this.title.textContent = book.getTitle();
     this.author.textContent = book.getAuthor();
     this.pages.textContent = book.getPages();
     this.status.textContent = book.status.READING;
    }
}