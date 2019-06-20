import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListRestaurantComponent } from './list-restaurant/list-restaurant.component';
import { AppRoutingModule } from './app-routing.module';
import { ApiService } from "./core/api.service";
import { HttpClientModule, HttpClient } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ListRestaurantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
