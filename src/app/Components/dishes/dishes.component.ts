import { ApiService } from './../../Services/API/api.service';
import { UtillService } from './../../Services/Utill/utill.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss'],
})
export class DishesComponent implements OnInit {
  constructor(public _api: ApiService, public _utill: UtillService) {}

  ngOnInit(): void {}
}
