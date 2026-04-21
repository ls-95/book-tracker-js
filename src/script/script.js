const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");
const bookList = document.getElementById("bookList");

let books = [
  {
    title: "Murder on the Orient Express",
    author: "Agatha Christie",
    isRead: true,
  },
  {
    title: "Everyone in My Family Has Killed Someone",
    author: "Benjamin Stevenson",
    isRead: false,
  },
  {
    title: "Everyone on This Train Is a Suspect",
    author: "Benjamin Stevenson",
    isRead: false,
  },
  {
    title: "A Death in the Parish",
    author: "Richard Coles",
    isRead: false,
  },
  {
    title: "Over my dead body",
    author: "Maz Evans",
    isRead: false,
  },
];

function addBook() {}

function bookStatus(status) {}

function changeBookStatus(status) {}

function listBooks() {
  books.forEach((book) => {
    const ilEl = document.createElement("li");
    ilEl.innerHTML = `
    <div class="book-container">
      <div class="book-info">
        <span class="list-title">Title</span>: ${book.title}<br /><span class="list-title">Author</span>: ${book.author}<br /><span class="list-title">Status</span>: ${book.isRead ? "Read" : "Not Read"}
      </div>
      <div class="book-btn">
        <button onClick="changeBookStatus('Read')">Finished</button>
        <button onClick="changeBookStatus('Unread')">Unread</button>
      </div>
      
    </div>
    `;
    bookList.appendChild(ilEl);
    ilEl.classList.add("book");
  });
}
