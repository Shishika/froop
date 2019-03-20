import { RoutingSate } from './shared/services/navigationService.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'froop';

  public data:any=[]

  constructor(routingState: RoutingSate) {
    routingState.loadRouting();
  }
}
