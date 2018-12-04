import { RestaurantService } from './../shared/services/restaurantService.service';
import { LandingComponent } from './../landing/landing.component';
import { MenuService } from './../shared/services/menuService.service';
import { IMenus } from './../interfaces/menu';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menus: any[];
  selectedItem: any;

  constructor(private menuService: MenuService, private restaurantService: RestaurantService, private router: Router) {}

  ngOnInit() {
    this.menuService.getMenus('Burger King').subscribe(menus => {
      this.menus = menus[0];
      console.log(this.menus);
    });
  }

  navigate() {
    this.router.navigateByUrl('/item');
  }

  onSelect(item: any): void {
    this.selectedItem = item;
    console.log(this.selectedItem);
    this.menuService.onSelect(this.selectedItem);
  }
}
