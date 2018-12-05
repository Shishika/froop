import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IRestaurants } from '../../interfaces/restaurants';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private restaurantUrl = 'api/restaurant/restaurants.json';
  name: string;

  constructor(private http: HttpClient) {}

  getRestaurants(): Observable<IRestaurants[]> {
      return this.http.get<IRestaurants[]>(this.restaurantUrl);
  }

  onSelectRestaurant(restaurantName: string) {
    this.name = restaurantName;
  }
}

