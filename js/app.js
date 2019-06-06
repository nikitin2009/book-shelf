let myLibrary = [];

function Book({title, author, pages, read}) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
    let readText = this.read ? "read" : "not read yet";
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readText}`;
  }
}

function addBookToLibrary() {
  myLibrary.push(new Book(book));
}