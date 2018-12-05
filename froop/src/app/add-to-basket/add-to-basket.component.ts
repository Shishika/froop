import { MenuService } from './../shared/services/menuService.service';
import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-add-to-basket',
  templateUrl: './add-to-basket.component.html',
  styleUrls: ['./add-to-basket.component.scss']
})
export class AddToBasketComponent implements OnInit {
  @Input() itemQuantity: number;
  public selectedItem: any;
  public quantity: number;
  public price = 0;

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.selectedItem = this.menuService.itemSelected;
  }

  public method() {
    this.quantity = this.itemQuantity;
    this.price = this.quantity * this.selectedItem.price;
    console.log(this.price);
    console.log(this.quantity);
  }
}
