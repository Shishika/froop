import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
quantity: number = 0;
  constructor() { }

  removeItem(): any {
    this.quantity = this.quantity - 1;
  }

  addItem(): any {
    this.quantity = this.quantity + 1;
  }
  ngOnInit() {
  }
}
