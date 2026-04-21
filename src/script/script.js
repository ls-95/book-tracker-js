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
    isRead: true,
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
  const newBook = {
    title: titleInput.value,
    author: authorInput.value,
    isRead: false,
  };
  console.log(newBook);
  books.push(newBook);
  console.log(books);
  titleInput.value = "";
  authorInput.value = "";
  bookStatus("all");
}

function bookStatus(status) {
  let newBook = books.filter((book) =>
    status === "read" ? book.isRead : status === "unread" ? !book.isRead : book,
  );
  bookList.innerHTML = "";
  newBook.forEach((book) => {
    const ilEl = document.createElement("li");
    ilEl.innerHTML = `
    <div class="book-container">
      <div class="book-info">
        <div>
          <p class="list-title">Title: </p>
          <p class="list-title">Author: </p>
          <p class="list-title">Status: </p>
        </div>
        <div>
          <p>${book.title}</p>
          <p>${book.author}</p>
          <p>${book.isRead ? `<span class='green'>Read</span>` : `<span class='red'>Not Read</span>`}</p>
        </div>
      </div>
      <div class="book-btn">
        ${
          status === "all"
            ? `<button onclick="changeBookStatus('read')">Read</button>
               <button onclick="changeBookStatus('unread')">Unread</button>`
            : book.isRead
              ? `<button onclick="changeBookStatus('unread')">Unread</button>`
              : `<button onclick="changeBookStatus('read')">Read</button>`
        }
</div>
    </div>
    `;
    bookList.appendChild(ilEl);
    ilEl.classList.add("book");
  });
}

function changeBookStatus(status) {}

bookStatus("all");

{
  /* <button onClick="changeBookStatus('${btnLabel}')">${btnLabel}</button>
        ${status === "all" ? `<button onClick="changeBookStatus('${btnLabel === "read" ? "Unread" : "read"}')">${btnLabel === "read" ? "Unread" : "Read"}</button>` : ""} */
}
