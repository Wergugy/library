const library = [];

function book(title, author, genre, pages, read) {
        this.title = title
        this.author = author
        this.genre = genre
        this.pages = pages
        this.read = read
};

function addNewBook() {
        const bookInfo = document.querySelectorAll('form');

        const bookArgs = [];

        const title = bookInfo.filter((info) => info.classList.contains('title')).value;
        const author = bookInfo.filter((info) => info.classList.contains('author')).value;
        const genre = bookInfo.filter((info) => info.classList.contains('genre')).value;
        const pages = bookInfo.filter((info) => info.classList.contains('pages')).value;
        const read = bookInfo.filter((info) => info.classList.contains('read')).value;
}

