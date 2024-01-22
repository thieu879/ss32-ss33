class Book {
    constructor(title, author, publishedYear) {
      this.title = title;
      this.author = author;
      this.publishedYear = publishedYear;
      this.isAvailable = true;
    }
  
    borrow() {
        this.isAvailable = false;
        console.log(`Bạn đã mượn sách ${this.title} thành công`);
    }
  
    returnBook() {
      this.isAvailable = true;
      console.log(`Bạn đã trả sách ${this.title} thành công`);
    }
}
class Library {
    constructor() {
        this.books = [];
    }
  
    addBook(book) {
        this.books.push(book);
    }
  
    isBookAvailable(title) {
        const book = this.books.find(book => book.title === title);
        if (book && book.isAvailable) {
            console.log(`Sách ${title} có sẵn để mượn`);
        } else {
            console.log(`Sách ${title} hiện không có sẵn`);
        }
    }
}
const library = new Library();
const book1 = new Book('Tiêu đề 1', 'Tác giả 1', 2024);
const book2 = new Book('Tiêu đề 2', 'Tác giả 2', 2023);
library.addBook(book1);
library.addBook(book2);
book1.borrow();
book2.returnBook();
library.isBookAvailable('Tiêu đề 1');
library.isBookAvailable('Tiêu đề 2');
  