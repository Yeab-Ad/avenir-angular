import { UtillService } from './../Utill/utill.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private _utill: UtillService) {
    this.SetData(this.default_value);
  }
  default_value = 'burger';
  url = 'https://staging.tikusdelivery.com/api/searchDishesAndRestaurants';
  getDatas: any;
  dishesList: any;
  listRestaurants: any = [];
  dish: any = [];

  getData(form: any): Observable<any> {
    return this.http.post(this.url, form);
  }

  SetData(SearchValue: string) {
    const timeout = setTimeout(() => {
      this._utill.isLoading = true;
    }, 500);

    const form = new FormData();
    form.append('restaurantName', SearchValue);
    form.append('latitude', '9.003869');
    form.append('longitude', '38.780127');
    form.append('pageNumber', '1');
    this.getData(form).subscribe({
      next: (data) => {
        this.getDatas = data;
        this.listRestaurants = this.getDatas.listRestaurants;

        this.dish = [];

        for (let i in this.getDatas.listDishes) {
          for (let j in this.getDatas.listDishes[i].dishesList) {
            this.dish?.push(this.getDatas.listDishes[i].dishesList[j]);
          }
        }
        this.dishesList = this.getDatas.listDishes;
        console.log(this._utill.isLoading);

        this._utill.isLoading = false;
        clearTimeout(timeout);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
