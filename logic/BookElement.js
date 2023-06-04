import { BookState } from "./BookState.js";
export class BookElement {
    constructor(library, parent, title, author, pages, statusButton, deleteButton) {
        this.library = library;
        this.parent = parent;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = statusButton;
        this.status.addEventListener('click', (e) => {
            let bookStatus = library.changeBookStatus(title.textContent);
            e.target.textContent = bookStatus;
            switch (bookStatus) {
                case BookState.NOT_READ:
                    e.target.classList.add('not-read-status');
                    e.target.classList.remove('read-status');
                    break;
                case BookState.READ:
                    e.target.classList.add('read-status');
                    e.target.classList.remove('reading-status');
                    break;
                case BookState.READING:
                e.target.classList.add('reading-status');
                e.target.classList.remove('not-read-status');
                break;
            
                default:
                    console.log("UH OH something when wrong with button status color change!");
                    break;
            }
           
        })

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
     this.status.textContent = book.status;
     this.status.classList.add('not-read-status');
    }
}