import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CardComponent } from '../card/card.component';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { cakecard } from '../cakecard';
import { FormsModule } from '@angular/forms';
import { CardsService } from '../service/cards.service';
import { HeaderComponent } from '../header/header.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { LoadingComponent } from '../loading/loading.component';
import { LoadingService } from '../service/loading.service';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterModule,RouterLink, CardComponent,NgFor,FormsModule, HeaderComponent,CarouselComponent,LoadingComponent,CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent implements OnInit {
  loading = true;

  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.loadingService.loading$.subscribe((loading: boolean) => {
      this.loading = loading;
    });

  
    this.simulateAsyncOperation();
  }

  simulateAsyncOperation() {
    this.loadingService.show(); 

    setTimeout(() => {
      this.loadingService.hide();
    }, 3000);
  }
}