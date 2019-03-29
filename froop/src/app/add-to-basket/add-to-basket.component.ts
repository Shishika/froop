import { LocalStorageService } from './../shared/services/localStorageService';
import { Router } from '@angular/router';
import { ItemComponent } from './../item/item.component';
import { MenuService } from '../shared/services/menuService.service';
import { Component, OnInit, Input } from '@angular/core';
import { AddBasketService } from '../shared/services/addBasketService';
import { ICartItems } from '../interfaces/ICartItems';

@Component({
  selector: 'app-add-to-basket',
  templateUrl: './add-to-basket.component.html',
  styleUrls: ['./add-to-basket.component.scss']
})
export class AddToBasketComponent implements OnInit {
  @Input() itemQuantity: number;
  public selectedItem: any;
  name: string;
  price: number;
  itemprice: number = 100;
  quantity: number = 0;
  cartItems: ICartItems;
  item: any;

  constructor(private menuService: MenuService, private addBasketService: AddBasketService, private router: Router, 
    private localStorageService: LocalStorageService) {}

  ngOnInit() {
    this.selectedItem = this.menuService.itemSelected;
  }

  navigate() {
    this.router.navigateByUrl('/checkout');
  }

  setitemvalue() {
    this.name = this.selectedItem.itemName;
    this.price = this.itemQuantity * this.selectedItem.price;
    this.cartItems = {price: this.price, quantity: this.itemQuantity, itemName: this.name};
    this.localStorageService.saveItem(this.cartItems);
    this.localStorageService.price(this.price);
    // this.localStorageService.method(this.cartItems);
  }
}
