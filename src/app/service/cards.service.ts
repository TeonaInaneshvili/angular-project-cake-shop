import { Injectable } from '@angular/core';
import { cakecard } from '../cakecard';

@Injectable({
  providedIn: 'root'
})
export class CardsService {


  constructor() { }

  url = 'https://66608b9f5425580055b45b72.mockapi.io/childhooCakes';

  async getCakes(): Promise<cakecard[]> {
    const response = await fetch(this.url);
    return await response.json() ?? [];
  }

  async getCakeId(cakeId: number): Promise<cakecard | undefined> {
    const response = await fetch(`${this.url}/${cakeId}`);
    return await response.json() ?? {};
  }


}

