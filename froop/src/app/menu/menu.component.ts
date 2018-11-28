import { MenuService } from './../shared/services/menuService.service';
import { IMenus } from './../interfaces/menu';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menus: IMenus[];
  constructor(private menuService: MenuService) {}
  ngOnInit() {
    this.menuService.getMenus().subscribe(menus => this.menus = menus);
  }
}
