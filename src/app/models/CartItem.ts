import { Book } from './Book';

export class CartItem {
  constructor(book: Book) {
    this.book = book;
  }
  book: Book;
  quantity: number = 1;

  get price(): number {
    return this.book.price * this.quantity;
  }
}
