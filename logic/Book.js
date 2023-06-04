import { BookState } from "./BookState.js";
export class Book {
    
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = BookState.NOT_READ;
    }
    changeStatus = () => {
        console.log("Prior status:" + this.status);
        switch(this.status) {
            case BookState.READ:
                this.status = BookState.NOT_READ;
                break;
            case BookState.READING:
                this.status = BookState.READ;
                break;
            case BookState.NOT_READ:
                this.status = BookState.READING;
                break;
        }
        console.log("After switch statement status:" + this.status);
    }

    getStatus() {
         return this.status;
    }
}

Book.prototype.details = function() {
    return `Book is ${this.title} with ${this.pages} pages by ${this.author}`;
}

Book.prototype.getTitle = function() {
    return this.title;
}

Book.prototype.getAuthor = function() {
    return this.author;
}

Book.prototype.getPages = function() {
    return `${this.pages} pages`;
}

