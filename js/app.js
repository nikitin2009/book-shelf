let myLibrary = [
  {
    title: "The Internet of Money",
    author: "Andreas Antonopoulos",
    pages: 150,
    read: true,
  },
  {
    title: "Normal People",
    author: "Sally Rooney",
    pages: 273,
    read: false,
  },
];

function Book({title, author, pages, read}) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

Book.prototype.info = function() {
  let readText = this.read ? "read" : "not read yet";
  return `${this.title} by ${this.author}, ${this.pages} pages, ${readText}`;
}

function addBookToLibrary() {
  // TO-DO
  myLibrary.push(new Book(book));
}

function render() {
  const app = document.getElementById("app");
  const pageHeading = "<h1>Books shelf</h1>";

  const table = document.createElement("table");
  table.className = "table table-striped";

  const tableHead = document.createElement("thead");
  tableHead.innerHTML = `
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Author</th>
      <th scope="col">Pages</th>
      <th scope="col">Read</th>
      <th scope="col">Actions</th>
    </tr>
  `;


  app.innerHTML = "";
}