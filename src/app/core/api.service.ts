import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Restaurant} from "../model/restaurant.model";
import {Observable} from "rxjs/index";
import {ApiResponse} from "../model/api.response";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:3000/api/v1/';

  // restaurants
  getRestaurants() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl+'restaurants.json');
  }

  createRestaurant(restaurant: Restaurant): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl+'restaurants.json', restaurant);
  }

  // reviews
  createReview(review: Review): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl+'reviews.json', review);
  }



}
