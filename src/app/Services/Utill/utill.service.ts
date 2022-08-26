import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtillService {
  constructor() {}

  isDishSelected: boolean = false;
  isLoading: boolean = false;

  Dish() {
    this.isDishSelected = true;
  }
  Restaurant() {
    this.isDishSelected = false;
  }
}
