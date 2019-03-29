import { LocalStorageService } from './../shared/services/localStorageService';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICartItems } from '../interfaces/ICartItems';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  cartItems : any[] =[];
  totalPrice: number;
  constructor(private localStorageService: LocalStorageService, private router: Router) { }

  ngOnInit() {    
      this.cartItems = this.localStorageService.getItem();
      this.totalPrice = this.localStorageService.totalPrice;
  }

  navigate() {
    this.router.navigateByUrl('/placeOrder')
  }
}
