const library = [];

function book(title, author, genre, pages, read) {
        this.title = title
        this.author = author
        this.genre = genre
        this.pages = pages
        this.read = read ? 'Read' : 'Unread';
};

function addNewBook(event) {
        event.preventDefault();

        const bookInfo = Array.from(document.querySelectorAll('.info'));

        const title = bookInfo.find(info => info.classList.contains('title')).value;
        const author = bookInfo.find(info => info.classList.contains('author')).value;
        const genre = bookInfo.find(info => info.classList.contains('genre')).value;
        const pages = bookInfo.find(info => info.classList.contains('pages')).value;
        const read = bookInfo.find(info => info.classList.contains('read')).checked;

        const bookToAdd = new book(title, author, genre, pages, read);

        library.push(bookToAdd);
};

document.querySelector('.addBook').addEventListener('click', addNewBook);