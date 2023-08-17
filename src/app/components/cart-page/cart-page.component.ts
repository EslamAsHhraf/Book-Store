import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { Cart } from '../../models/Cart';
import { CartItem } from '../../models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  constructor(private cartService: CartService) {
    this.setCart();
  }
  ngOnInit(): void {}
  // remove book from cart
  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.book.id);
    this.setCart();
  }
  // change quantity of books
  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.book.id, quantity);
    this.setCart();
  }
  // get all books in cart
  setCart() {
    this.cart = this.cartService.getCart();
  }
}
