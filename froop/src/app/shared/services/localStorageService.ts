import { Inject, Injectable } from '@angular/core';
import { ICartItems } from 'src/app/interfaces/ICartItems';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  cartValue: ICartItems[] = [];
  value: any;
  totalPrice: number = 0;

  saveItem(value) {
    this.value = this.cartValue.push(value);
    console.log(this.value);
  }

  getItem() {
    console.log(this.cartValue);
    return this.cartValue;
  }

  price(totalValue) {
    this.totalPrice = totalValue + this.totalPrice;
  }
}
