import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IRestaurants } from '../../interfaces/restaurants';
import { IMenus } from '../../interfaces/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuUrl = 'api/menus/mcDMenu.json';

  constructor(private http: HttpClient) {}

  getMenus(): Observable<IMenus[]> {
      return this.http.get<IMenus[]>(this.menuUrl);
  }
}
