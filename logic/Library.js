export class Library {
    constructor() {
        this.books = [];
        this.length = 0;
    }

    addBook(book) {
        this.length = this.books.push(book);
        console.log(this.length);
        console.log(this.books);
    }

    removeBook(title) {
        let index = this.books.findIndex(book => book.title === title);
        this.books.splice(index, 1);    
    }

    has(title) {
        return this.books.some((book) => book.title === title);
    }
}