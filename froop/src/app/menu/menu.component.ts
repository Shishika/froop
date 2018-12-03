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
  menus: IMenus[];
  selectedItem: any;

  constructor(private menuService: MenuService, private router: Router) {}

  ngOnInit() {
    this.menuService.getMenus().subscribe(menus => this.menus = menus);
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

