import { CommonModule, NgIf } from '@angular/common';
import { NavigationStart, Router, RouterLink, RouterModule } from '@angular/router';
import { CardsService } from '../service/cards.service';
import { Component, HostListener } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-header',
  imports: [CommonModule,RouterLink, RouterModule, NgIf, MainComponent,CardComponent],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }


isDisplay:boolean = false;
 
signIn(){
setTimeout(() => {
  this.isDisplay = !this.isDisplay;
}, 100);
}
 
preventClose(event: Event) {
  event.stopPropagation();
}

@HostListener('document:click', ['$event'])
onDocumentClick(event: Event) {
  if (this.isDisplay) {
    const clickedInside = (event.target as HTMLElement).closest('.sigIn-container');
    if (!clickedInside) {
      this.isDisplay = false;
      console.log('Clicked outside, isDisplay:', this.isDisplay);
    }
  }
}


}
