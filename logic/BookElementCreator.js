export class BookElementCreator {
    
    constructor() {
        
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
BookElementCreator.prototype.create = function(document ,book) {
    const div = document.createElement('div');
    div.classList.add('book');

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

    div.append(titlePara);
    div.append(authorPara);
    div.append(pagesPara);
    div.append(buttonWrapper);
    buttonWrapper.append(statusButton);
    buttonWrapper.append(deleteButton);

    this.updateElement(titlePara, authorPara, pagesPara, statusButton, deleteButton, book);
    const bookContainer = document.querySelector(".book-container");
    bookContainer.append(div);
    console.log('Book Item created');
    this.elements.push(div);
    
    return div;
}