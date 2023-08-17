import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../servies/cart/services';
import { BookService } from '../../servies/book/book.service';
import { Book } from '../../models/Book';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css'],
})
export class BookPageComponent implements OnInit {
  book!: Book;
  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService,
    private cartService: CartService,
    private router: Router
  ) {
    // get book by id
    activatedRoute.params.subscribe((params) => {
      if (params['id']) this.book = bookService.getBookById(params['id']);
    });
  }

  ngOnInit(): void {}

  // add book to the cart
  addToCart() {
    this.cartService.addToCart(this.book);
    this.router.navigateByUrl('/cart-page');
  }
}
