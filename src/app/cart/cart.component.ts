import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { cakecard } from '../cakecard';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class CartComponent implements OnInit {
  cart: cakecard[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(cart => {
      this.cart = cart;
      this.total = this.cartService.getTotal();
    });
  }

  removeProduct(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  increaseQuantity(productId: number) {

  }

  decreaseQuantity(productId: number) {

  }

  order() {

  }
}
