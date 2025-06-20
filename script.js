const myLibrary = [];

function Book(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages; 
    this.read = read;
    this.id = id; 
}

function addBooktoLibrary(title, author, pages, read, id) {
    book = Book(title, author, pages, read, id);
    myLibrary.push(book);
}

function displayBooks(library) {
    
}