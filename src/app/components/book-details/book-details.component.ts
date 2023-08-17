import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../../models/Book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  @Input() book!: Book;
  @Output() addToCart: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}
  // add book to the cart
  emitAddToCart(event: Event) {
    event.preventDefault();
    this.addToCart.emit(this.book);
  }
}
