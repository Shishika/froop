import { ItemComponent } from './../item/item.component';
import { MenuService } from '../shared/services/menuService.service';
import { Component, OnInit, Input } from '@angular/core';
import { AddBasketService } from '../shared/services/addBasketService';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-add-to-basket',
  templateUrl: './add-to-basket.component.html',
  styleUrls: ['./add-to-basket.component.scss']
})
export class AddToBasketComponent implements OnInit {
  @Input() itemQuantity: number;
  // itemQuantity: BehaviorSubject<number | null> = new BehaviorSubject<number | null>(null);
  public selectedItem: any;
  public quantity: number;
  public price = 0;

  constructor(private menuService: MenuService, private addBasketService: AddBasketService) {}

  ngOnInit() {
    this.selectedItem = this.menuService.itemSelected;
  }
}
