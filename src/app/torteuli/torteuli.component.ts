import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from '../card/card.component';
import { FormsModule } from '@angular/forms';
import { cakecard } from '../cakecard';
import { CardsService } from '../service/cards.service';
import { LoadingService } from '../service/loading.service';
import { LoadingComponent } from '../loading/loading.component';
import { CartService } from '../service/cart.service'; // Import CartService
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-torteuli',
  standalone: true,
  imports: [RouterModule, CardComponent, FormsModule, LoadingComponent, NgFor, NgIf],
  templateUrl: './torteuli.component.html',
  styleUrls: ['./torteuli.component.css']
})
export class TorteuliComponent implements OnInit {
  cakes: cakecard[] = [];
  filteredcakes: cakecard[] = [];
  searchword: string = '';
  loading: boolean = true;

  constructor(
    private cardsService: CardsService,
    private loadingService: LoadingService,
  ) {}

  ngOnInit(): void {
    this.loadingService.loading$.subscribe((loading: boolean) => {
      this.loading = loading;
    });

    this.simulateAsyncOperation();
    this.loadCakes();
  }

  simulateAsyncOperation() {
    this.loadingService.show(); 

    setTimeout(() => {
      this.loadingService.hide(); 
    }, 3000);
  }

  loadCakes() {
    this.cardsService.getCakes().then((cakes: cakecard[]) => {
      this.cakes = cakes;
      this.filteredcakes = cakes;
    });
  }

  filter() {
    this.filteredcakes = this.searchword !== '' ? this.cakes.filter(el => el.name.includes(this.searchword)) : this.cakes;
  }

  filterCards(event: Event) {
    const target = event.target as HTMLSelectElement;
    const theme = target.value;
    this.filteredcakes = theme ? this.cakes.filter(cake => cake.theme === theme) : this.cakes;
  }


}
