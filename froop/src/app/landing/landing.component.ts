import { RestaurantService } from './../shared/services/restaurantService.service';
import { MenuService } from './../shared/services/menuService.service';
import { IRestaurants } from '../interfaces/restaurants';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  restaurants: IRestaurants[];
  restaurantName: string;

  constructor(private restaurantService: RestaurantService, private menuService: MenuService,
    private router: Router) {

   }
  ngOnInit() {
   this.restaurantService.getRestaurants().subscribe(
      restaurants => this.restaurants = restaurants
    );
    this.menuService.getMenus(this.selectedRestaurant);
  }

  navigate() {
    this.router.navigateByUrl('/menu');
    this.menuService.getMenus(this.selectedRestaurant);
  }

  selectedRestaurant(restaurant: string) {
    this.restaurantName = restaurant;
    this.restaurantService.onSelectRestaurant(this.restaurantName);
  }
}
