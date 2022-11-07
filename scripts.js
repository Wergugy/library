const library = [];

function book(title, author, genre, pages, read) {
        this.title = title ? title : 'N/A'
        this.author = author ? author : 'N/A'
        this.genre = genre ? genre : 'N/A'
        this.pages = pages ? genre : 'N/A'
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
        readButton.textContent = (this.read === 'Read') ? 'Unread' : 'Read';
        newCard.appendChild(readButton);

        const removeButton = document.createElement('button');
        removeButton.classList.add('removeButton');
        removeButton.textContent = 'Remove';
        newCard.appendChild(removeButton);

        document.querySelector('.carousel').appendChild(newCard);

        document.querySelectorAll('.removeButton').forEach(b => b.addEventListener('click', removeBook));
        document.querySelectorAll('.readButton').forEach(b => b.addEventListener('click', readUnread));
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
};

function removeBook(e) {
        e.stopPropagation();
        const card = e.target.closest('.card');
        const location = card.getAttribute('data-card');

        library.slice(location -1, location);
        card.remove();

};

function readUnread(e) {
        e.stopPropagation();
        const read = e.target.previousElementSibling;
        e.target.textContent = read.textContent;
        read.textContent = (read.textContent === 'Read') ? 'Unread' : 'Read';

        const book = library[e.target.closest('.card').getAttribute('data-card') - 1];
        book.read = read.textContent;
};

document.querySelector('.addBook').addEventListener('click', addNewBook);

document.querySelector('.addNewBook').addEventListener('click', hideNoHide);