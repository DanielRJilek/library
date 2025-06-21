function Book(title, author, pages, id, progress) {
    this.title = title;
    this.author = author;
    this.pages = pages; 
    this.read = true;
    this.id = id; 
    this.progress = progress;
}

function addBooktoLibrary(title, author, pages, id, progress) {
    const book = new Book(title, author, pages, id, progress);
    myLibrary.push(book);
}

function displayBooks(library) {
    const content = document.querySelector('#content')
    for (let i = 0; i < library.length; i++) {
        const book = library[i];
        const div = document.createElement("div");
        div.classList.add("book");
        div.textContent = book.title;
        div.setAttribute("id", book.id);


        const readButton = document.createElement("button");
        readButton.classList.add("readButton");
        readButton.textContent = "Mark Read";
        const removeButton = document.createElement("button");
        removeButton.classList.add("removeButton");
        removeButton.textContent = "Remove";
        div.appendChild(readButton);
        div.appendChild(removeButton);


        content.appendChild(div);
    }
}

function removeBook(e, library) {
    const div = e.target.parentElement;
    const id = e.target.parentElement.id;
    let index = -1;
    for (let i = 0; i < library.length; i++) {
        if (library[i].id == id) {
            index = i;
            break
        }
    }
    library.splice(library.index, 1);
    while (div.firstChild) {
        div.lastChild.remove();
    }
    div.remove();
}

const myLibrary = [];

addBooktoLibrary("The Three Musketeers", "Alexandre Dumas", 100, crypto.randomUUID(), false);
addBooktoLibrary("The Count of Monte Cristo", "Alexandre Dumas", 100, crypto.randomUUID(), false);
displayBooks(myLibrary);

const removeButtons = document.querySelectorAll(".removeButton");
removeButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
        removeBook(e,myLibrary);
    });
});