import { UtillService } from './Services/Utill/utill.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantsComponent } from './Components/restaurants/restaurants.component';
import { DishesComponent } from './Components/dishes/dishes.component';
import { ApiService } from './Services/API/api.service';

@NgModule({
  declarations: [AppComponent, RestaurantsComponent, DishesComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [ApiService, UtillService],
  bootstrap: [AppComponent],
})
export class AppModule {}
