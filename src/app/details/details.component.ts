import { Component, inject } from '@angular/core';
import { cakecard } from '../cakecard';
import { CardsService } from '../service/cards.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CardComponent } from '../card/card.component';
import { NgModel } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [NgIf],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  cakes:cakecard | undefined
  route:ActivatedRoute = inject(ActivatedRoute)

  constructor(private CardsService:CardsService) {
    const myId = Number(this.route.snapshot.params['id'])
    this.CardsService.getCakeId(myId).then(cake =>{
      this.cakes = cake
    })
  
  }

}
