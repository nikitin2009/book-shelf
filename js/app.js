let myLibrary = [];

function Book({title, author, pages, read}) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

Book.prototype.getReadText = function() {
  return this.read ? "read" : "not read yet";
}

// Add a few sample books
myLibrary.push(new Book({
  title: "The Internet of Money",
  author: "Andreas Antonopoulos",
  pages: 150,
  read: true,
}));
myLibrary.push(new Book({
  title: "Normal People",
  author: "Sally Rooney",
  pages: 273,
  read: false,
}));

// Helper function
function addBookToLibrary(book) {
  myLibrary.push(new Book(book));
}

function handleNewBookSubmit(e) {
  e.preventDefault();

  let formElements = e.target.elements;
  let bookParams = {
    title: formElements["title"].value,
    author: formElements["author"].value,
    pages: Number(formElements["pages"].value),
    read: formElements["read"].checked
  };

  addBookToLibrary(bookParams);
  render();
}

function showNewBookForm() {
  const newBookForm = document.getElementById('newBookForm');
  newBookForm.classList.toggle('d-none');
}

// Render functions
function renderHeader() {
  const pageHeading = "<h1 class='text-center'>Books shelf</h1>";
  
  const newBookButton = document.createElement("button");
  newBookButton.className = "btn btn-outline-primary btn-add-book mt-4";
  newBookButton.innerText = "New Book";
  newBookButton.onclick = showNewBookForm;

  const header = document.createElement("header");
  header.className = "py-3";
  header.innerHTML = pageHeading;
  header.appendChild(newBookButton);

  return header;
}

function renderNewBookForm() {
  const form = document.createElement('form');
  form.className = "form-inline mb-4 d-none";
  form.id = "newBookForm";
  form.onsubmit = handleNewBookSubmit;
  form.innerHTML = `
    <label class="sr-only" for="bookTitle">Title</label>
    <input name="title" type="text" class="form-control mr-sm-3" id="bookTitle" placeholder="Title" required>

    <label class="sr-only" for="bookAuthor">Author</label>
    <input name="author" type="text" class="form-control mr-sm-3" id="bookAuthor" placeholder="Author">

    <label class="sr-only" for="bookPages">Pages</label>
    <input name="pages" type="number" class="form-control mr-sm-3" id="bookPages" placeholder="Pages">

    <div class="custom-control custom-checkbox my-1 mr-sm-5">
      <input name="read" type="checkbox" class="custom-control-input" id="bookRead">
      <label class="custom-control-label" for="bookRead">Read</label>
    </div>

    <button type="submit" class="btn btn-primary">Add Book</button>
  `;

  return form;
}

function renderTableRow(book, index) {
  return `
    <tr>
      <th scope="row">${index + 1}</th>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td>${book.getReadText()}</td>
      <td></td>
    </tr>
  `;
}

function renderTable(books) {
  const table = document.createElement("table");
  const tableHead = document.createElement("thead");
  const tableBody = document.createElement("tbody");
  const tableRows = books.map((book, index) => renderTableRow(book, index));

  table.className = "table table-striped";

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

  tableBody.innerHTML = tableRows.join('');

  table.appendChild(tableHead) ;
  table.appendChild(tableBody);

  return table;
}


function render() {
  const app = document.getElementById("app");
  app.innerHTML = "";
  
  const header = renderHeader();

  const newBookForm = renderNewBookForm();

  const booksTable = renderTable(myLibrary);

  app.appendChild(header);
  app.appendChild(newBookForm);
  app.appendChild(booksTable);
}