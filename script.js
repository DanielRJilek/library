function Book(title, author, pages, id) {
    this.title = title;
    this.author = author;
    this.pages = pages; 
    this.read = false;
    this.id = id; 
}

function addBooktoLibrary(title, author, pages, id) {
    const book = new Book(title, author, pages, id);
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

        const info = document.createElement("div");
        info.textContent = "Not read";
        info.classList.add("info");
        div.appendChild(info);

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
    const book = e.target.parentElement;
    const id = book.id;
    let index = -1;
    for (let i = 0; i < library.length; i++) {
        if (library[i].id == id) {
            index = i;
            break
        }
    }
    library.splice(library.index, 1);
    while (book.firstChild) {
        book.lastChild.remove();
    }
    book.remove();
}

function markRead(e,library) {
    const book = e.target.parentElement;
    const id = book.id;
    let index = -1;
    for (let i = 0; i < library.length; i++) {
        if (library[i].id == id) {
            index = i;
            library[i].read = true;
        }
    }
    const info = book.querySelector(".info");
    info.textContent = "Read";
}

const myLibrary = [];

// addBooktoLibrary("The Three Musketeers", "Alexandre Dumas", 100, crypto.randomUUID());
// addBooktoLibrary("The Count of Monte Cristo", "Alexandre Dumas", 100, crypto.randomUUID());
displayBooks(myLibrary);

const removeButtons = document.querySelectorAll(".removeButton");
const readButtons = document.querySelectorAll(".readButton")
removeButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
        removeBook(e,myLibrary);
    });
});
readButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
        markRead(e,myLibrary);
    });
});