import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddBasketService {
  quantity: number;
  getQuantity(itemQuantity: number) {
    this.quantity = itemQuantity;
  }

  sendQuantity() {
    console.log(this.quantity);
    return this.quantity;
  }
}
