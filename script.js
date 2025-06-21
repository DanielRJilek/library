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

function submitNewBook(e,library) {
    
    const form = e.target.parentElement;
    const title = form.querySelector("#title").value;
    const author = form.querySelector("#author").value;
    const pages = form.querySelector("#pages").value;
    const id = crypto.randomUUID();
    addBooktoLibrary(title, author, pages, id);
    // create new html
    // use at since negative indices are not allowed in JS arrays
    const book = library.at(-1);
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
    // button functionality
    removeButton.addEventListener("click", function (event) {
        removeBook(event,library);
    });
    readButton.addEventListener("click", function (event) {
        markRead(event,library);
    });
    e.preventDefault();
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

// MAKE THIS REVERSIBLE!!!!!
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
// this needs to be called on future additions of books
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

const dialog = document.querySelector("dialog");
const cancelButton = document.querySelector("#cancel")
const newButton = document.querySelector("#new-book")
cancelButton.addEventListener("click", () => {
    dialog.close();
});
newButton.addEventListener("click", () => {
    dialog.show();
});

const submitButton = document.querySelector('button[type="submit"]');
submitButton.addEventListener("click", function (e) {
    submitNewBook(e,myLibrary);
    dialog.close;
});