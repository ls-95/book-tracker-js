const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");

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

function addBook() {
  const title = titleInput.value;
  const author = authorInput.value;
  if (!title || !author) {
    alert("Please enter both a title and author!");
  }
  books.push({
    title: title,
    author: author,
    isRead: false,
  });

  titleInput.value = "";
  authorInput.value = "";
  listBooks();
}

function listBooks() {
  const bookList = document.getElementById("bookList");
  let number = 0;
  bookList.innerHTML = "";
  books.forEach((book) => {
    const item = document.createElement("li");
    number++;
    item.textContent = `${number}. ${book.title} - ${book.author} (${book.isRead ? "Read" : "Unread"})`;
    bookList.appendChild(item);
  });
}
listBooks();
