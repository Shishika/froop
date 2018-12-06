import { AddToBasketComponent } from './../add-to-basket/add-to-basket.component';
import { BehaviorSubject } from 'rxjs';
import { MenuService } from './../shared/services/menuService.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @ViewChild(AddToBasketComponent) basket;
  public quantity = 0;
  public newQuantity: number;
  selectedItem: any;
  constructor(private menuService: MenuService) {}

  item: BehaviorSubject<any | null> = new BehaviorSubject<any | null>(null);

  removeItem(): any {
    if (this.quantity > 0) {
      this.newQuantity = --this.quantity;
      this.basket.method();
      console.log('removing ' + this.newQuantity);
    }
  }

  addItem(): any {
    this.newQuantity = ++this.quantity;
    this.basket.method();
    console.log('adding ' + this.newQuantity);
  }

  ngOnInit() {
    this.selectedItem = this.menuService.itemSelected;
  }
}
