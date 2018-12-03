import { Observable, BehaviorSubject } from 'rxjs';
import { MenuService } from './../shared/services/menuService.service';
import { Component, OnInit, Input } from '@angular/core';
import { IMenus } from '../interfaces/menu';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  quantity = 0;
  selectedItem: any;
  constructor(private menuService: MenuService) {}

  item: BehaviorSubject<any | null> = new BehaviorSubject<any | null>(null);

  removeItem(): any {
    this.quantity = this.quantity - 1;
  }

  addItem(): any {
    this.quantity = this.quantity + 1;
  }

  ngOnInit() {
   this.selectedItem = this.menuService.itemSelected;
   }
}
