class Book {
    constructor(title, author, publishedYear) {
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }
}
let book = [
    new Book('Tiêu đề 1', 'Tác giả 1', 2001),
    new Book('Tiêu đề 2', 'Tác giả 2', 2002),
];
let library = new Library();
for(let i = 0;i<book.length;i++){
    library.addBook(book[i]);
}
console.log(library);
