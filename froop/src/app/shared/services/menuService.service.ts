import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { IMenus } from '../../interfaces/menu';
import { ICartItems } from '../../interfaces/ICartItems';
import { map } from 'rxjs/operators';
// import { Session } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuUrl = 'api/menus/menu.json';
  itemSelected: BehaviorSubject<any | null> = new BehaviorSubject<any | null>( null);
  constructor(private http: HttpClient) {}

  getMenus(restaurantName): Observable<IMenus> {
    return this.http.get(this.menuUrl).pipe(
      map((data: any) => {
        return data.list.filter(value => value.name === restaurantName);
      })
    );
  }

  onSelect(item): any {
    this.itemSelected = item;
    // this.itemSelected.next(this.itemSelected);
  }
}
