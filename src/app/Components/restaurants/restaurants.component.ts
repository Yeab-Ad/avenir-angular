import { UtillService } from './../../Services/Utill/utill.service';
import { ApiService } from './../../Services/API/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
})
export class RestaurantsComponent implements OnInit {
  constructor(public _api: ApiService, public _utill: UtillService) {}

  ngOnInit(): void {
    console.log(this._utill.isLoading);
  }
}
