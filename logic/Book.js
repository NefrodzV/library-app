export class Book {
    
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.BOOK_STATE = {
            READ: "READ",
            READING: "READING",
            NOT_READ: "NOT READ"
        }
        this.status = this.BOOK_STATE.NOT_READ;
    }
    changeStatus = () => {
        console.log("Prior status:" + this.status);
        switch(this.status) {
            case this.BOOK_STATE.READ:
                this.status = this.BOOK_STATE.READING;
                break;
            case this.BOOK_STATE.READING:
                this.status = this.BOOK_STATE.NOT_READ;
                break;
            case this.BOOK_STATE.NOT_READ:
                this.status = this.BOOK_STATE.READ;
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

