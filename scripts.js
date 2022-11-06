const library = [];

function book(title, author, genre, pages, read) {
        this.title = title
        this.author = author
        this.genre = genre
        this.pages = pages
        this.read = read ? 'Read' : 'Unread';
};

book.prototype.createCard = function() {
        const newCard = document.createElement('div');
        newCard.classList.add('card');
        newCard.setAttribute('data-card',`${library.length}`);

        const title = document.createElement('p');
        title.classList.add('title');
        title.textContent = this.title;
        newCard.appendChild(title);

        const author = document.createElement('p');
        author.classList.add('author');
        author.textContent = this.author;
        newCard.appendChild(author);

        const genre = document.createElement('p');
        genre.classList.add('genre');
        genre.textContent = this.genre;
        newCard.appendChild(genre);

        const pages = document.createElement('p');
        pages.classList.add('pages');
        pages.textContent = this.pages;
        newCard.appendChild(pages);

        const read = document.createElement('p');
        read.classList.add('read');
        read.textContent = this.read;
        newCard.appendChild(read);

        const readButton = document.createElement('button');
        readButton.classList.add('readButton');
        readButton.textContent = 'Read';
        newCard.appendChild(readButton);

        const removeButton = document.createElement('button');
        removeButton.classList.add('removeButton');
        removeButton.textContent = 'Remove';
        newCard.appendChild(removeButton);

        document.querySelector('.carousel').appendChild(newCard);

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

        bookToAdd.createCard();

        hideNoHide(event);
};

function hideNoHide(e) {
        e.stopPropagation();
        document.querySelector('#newBook').classList.toggle('hidden');
}

document.querySelector('.addBook').addEventListener('click', addNewBook);

document.querySelector('.addNewBook').addEventListener('click', hideNoHide);