import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back-icon',
  templateUrl: './back-icon.component.html',
  styleUrls: ['./back-icon.component.scss']
})
export class BackIconComponent implements OnInit {
  constructor(private location: Location) {}

  ngOnInit() {}

  cancel() {
    this.location.back();
  }
}
