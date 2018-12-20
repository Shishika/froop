import { BackIconComponent } from './shared/components/back-icon/back-icon.component';
import { MenuComponent } from './menu/menu.component';
import { RestaurantService } from './shared/services/restaurantService.service';
import { MenuService } from './shared/services/menuService.service';
import { AppRoutingModule } from './app-router.module';
import { BrowserModule, HammerGestureConfig } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { StarComponent } from './shared/star/star.component';
import { ItemComponent } from './item/item.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddToBasketComponent } from './add-to-basket/add-to-basket.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    StarComponent,
    ItemComponent,
    MenuComponent,
    AddToBasketComponent,
    BackIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [MenuService, RestaurantService],
  bootstrap: [AppComponent]
})

export class AppModule  { }
