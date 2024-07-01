import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { cakecard } from '../cakecard';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartSubject = new BehaviorSubject<cakecard[]>(this.loadCart());
  cart$ = this.cartSubject.asObservable();

  private saveCart(cart: cakecard[]) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  private loadCart(): cakecard[] {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  }

  getTotal(): number {
    return this.cartSubject.value.reduce((total, product) => total + product.price, 0);
  }

  addToCart(product: cakecard) {
    const cart = this.cartSubject.value;
    cart.push(product);
    this.cartSubject.next(cart);
    this.saveCart(cart);
  }

  removeFromCart(productId: number) {
    let cart = this.cartSubject.value;
    cart = cart.filter(product => product.id !== productId);
    this.cartSubject.next(cart);
    this.saveCart(cart);
  }

  clearCart() {
    this.cartSubject.next([]);
    this.saveCart([]);
  }
}
