import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
// import { CartComponent } from './cart/cart.component';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgIf } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
  HeaderComponent,
    MainComponent,
    FooterComponent,
    // CartComponent,
    CardComponent,
    CarouselComponent,NgIf,LoadingComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'childhoodCakes';
}