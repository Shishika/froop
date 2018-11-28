import { IRestaurants } from '../interfaces/restaurants';
import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../shared/services/RestaurantService.Service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  restaurants: IRestaurants[];
  constructor(private restaurantService: RestaurantService) {

   }
  ngOnInit() {
   this.restaurantService.getRestaurants().subscribe(
      restaurants => this.restaurants = restaurants
    );
  }
}
