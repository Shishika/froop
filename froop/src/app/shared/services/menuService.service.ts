import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { IMenus } from '../../interfaces/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuUrl = 'api/menus/mcDMenu.json';
  itemSelected: BehaviorSubject<any | null> = new BehaviorSubject<any | null>(null);

  constructor(private http: HttpClient) {}

  getMenus(): Observable<IMenus[]> {
      return this.http.get<IMenus[]>(this.menuUrl);
  }

  onSelect(item): any {
  console.log(item + 'in service');
    this.itemSelected = item;
    this.itemSelected.subscribe
    ((res) => this.itemSelected.next(res));
  }
}
