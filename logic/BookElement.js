export class BookElement {
    constructor(library, parent, title, author, pages, statusButton, deleteButton) {
        this.library = library;
        this.parent = parent;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = statusButton;

        this.delete = deleteButton;
        this.delete.addEventListener('click', (e)=> {
            this.parent.remove(); // Removes the node
            this.library.removeBook(title.textContent);
        })
    }

    update(book) {
     this.title.textContent = book.getTitle();
     this.author.textContent = book.getAuthor();
     this.pages.textContent = book.getPages();
     this.status.textContent = book.status.READING;
    }
}