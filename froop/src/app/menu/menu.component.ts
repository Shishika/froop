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
  name: string;
  constructor(private menuService: MenuService, private restaurantService: RestaurantService, private router: Router) {}

  ngOnInit() {
    this.name = this.restaurantService.name;
    this.menuService.getMenus(this.name).subscribe(menus => {
    this.menus = menus[0];
    });
  }

  navigate() {
    this.router.navigateByUrl('/item');
  }

  onSelect(item: any): void {
    this.selectedItem = item;
    this.menuService.onSelect(this.selectedItem);
  }
}
