import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book/book.service';
import { Book } from '../../models/Book';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../services/cart/cart.service';
@Component({
  selector: 'app-home',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params['searchTerm'])
        // if search get result according it
        this.books = this.bookService.getAllBooksBySearchTerm(
          params['searchTerm']
        );
      else {
        // get all books
        this.books = this.bookService.getAll();
      }
    });
  }

  // add book to the cart
  addToCart(book: Book) {
    this.cartService.addToCart(book);
    this.router.navigateByUrl('/cart-page');
  }
}
