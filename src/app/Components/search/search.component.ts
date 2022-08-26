import { ApiService } from './../../Services/API/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor(public _api: ApiService) {}

  ngOnInit(): void {}
}
