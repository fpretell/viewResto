import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";
import {Restaurant} from "../model/restaurant.model";
import {ApiService} from "../core/api.service";

@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.css'],
  providers: [ApiService]
})
export class ListRestaurantComponent implements OnInit {

  constructor(private router: Router, private apiService: ApiService) { }
  ngOnInit() {
    this.apiService.getRestaurants()
     .subscribe( data => {
         this.restaurants = data;
     });

  }

  addReviews(newReview): void {
    let data = {
    	"review":{
    		"content": newReview.value,
    		"restaurant": newReview.id
    	}
    }
    this.apiService.createReview(data)
      .subscribe( data => {
        if(data.id){
          this.ngOnInit();
        }
      });
  };

  addRestaurant(newRestaurant): void {
    let data = {
    	"restaurant":{
    		"name": newRestaurant.value
    	}
    }
    this.apiService.createRestaurant(data)
      .subscribe( data => {
        if(data.id){
          this.ngOnInit();
        }
      });
  };

}
