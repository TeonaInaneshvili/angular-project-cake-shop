import { Component, Input } from '@angular/core';
import { cakecard } from '../cakecard';
import { CommonModule, NgClass, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardsService } from '../../app/service/cards.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgIf,NgClass,RouterModule,CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
 @Input() cake!:cakecard

 test:number = 0;

 constructor(private cartService: CartService){}

 addToCart(cake: cakecard) {
  this.cartService.addToCart(cake); // Add product to cart

}

}
