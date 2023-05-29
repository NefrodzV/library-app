const addBook = document.querySelector('#add');
const bookForm = document.querySelector('#book-form');
const layer = document.querySelector(".layer");
const closeButton = document.querySelector(".close");

function changeFormVisibility() {
    bookForm.toggleAttribute("visible");
    layer.toggleAttribute("visible");    
}

addBook.addEventListener("click", () => {
   changeFormVisibility();
})

closeButton.addEventListener("click", () => {
    changeFormVisibility(); 
})