import { RestaurantService } from '../shared/services/restaurantService.service';
import { MenuService } from '../shared/services/menuService.service';
import { IRestaurants } from '../interfaces/restaurants';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit  {
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
  restaurants: any;
  restaurantName: string;

  constructor(private restaurantService: RestaurantService, private menuService: MenuService,
    private router: Router) {
   }

   avatars = [
    {
        name: 'kristy',
        image: 'https://s.abcnews.com/images/Business/ht_whopper_ad_lb_150928_12x5_992.jpg',
        visible: true
    },
    {
        name: 'matthew',
        image: 'https://nricafe.com/wp-content/uploads/2014/11/Tandoori-Chicken-Tikka.jpg',
        visible: false
    },
    {
        name: 'chris',
        image: 'https://www.lurpak.com/optimized/variable-medium/siteassets/campaign/ramadan/biryani_recipe_web.jpg',
        visible: false
    },
    {
        name: 'jenny',
        image: 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/waffles_with_hot_14908_16x9.jpg',
        visible: false
    }
];

swipe(currentIndex: number, action = this.SWIPE_ACTION.RIGHT) {
  // out of range
  if (currentIndex > this.avatars.length || currentIndex < 0) { return; }

  let nextIndex = 0;

  // swipe right, next avatar
  if (action === this.SWIPE_ACTION.RIGHT) {
      const isLast = currentIndex === this.avatars.length - 1;
      nextIndex = isLast ? 0 : currentIndex + 1;
  }

  // swipe left, previous avatar
  if (action === this.SWIPE_ACTION.LEFT) {
      const isFirst = currentIndex === 0;
      nextIndex = isFirst ? this.avatars.length - 1 : currentIndex - 1;
  }

  // toggle avatar visibility
  this.avatars.forEach((x, i) => x.visible = (i === nextIndex));
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
