export class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        console.log(this.has(book.title));
        this.books.push(book);
    }

    removeBook(title) {
        this.books = this.books.filter((book)=> book.title !== title);
    }

    has(title) {
        return this.books.some((book) => book.title === title);
    }
}