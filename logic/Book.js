export class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = {
            READ: "READ",
            READING: "READING",
            NOT_READ: "NOT READ"
        }
    }
}

Book.prototype.details = function() {
    return `Book is ${this.title} with ${this.pages} pages by ${this.author}`;
}
Book.prototype.getTitle = function() {
    return this.title;
}
Book.prototype.getAuthor = function() {
    return this.author
}
Book.prototype.getPages = function() {
    return `p. ${this.pages}`;
}

