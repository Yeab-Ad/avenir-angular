import { ApiService } from './Services/API/api.service';
import { UtillService } from './Services/Utill/utill.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public _utill: UtillService, public _api: ApiService) {}
  title = 'avenir-angular';
}
