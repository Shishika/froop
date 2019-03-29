import { PlaceOrderComponent } from './place-order/place-order.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LandingComponent } from './landing/landing.component';
import { AddToBasketComponent } from './add-to-basket/add-to-basket.component';
import { MenuComponent } from './menu/menu.component';
import { ItemComponent } from './item/item.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'landing',
        pathMatch: 'full'
    },
    {
        path: 'landing',
        component: LandingComponent
    },
    {
        path: 'menu',
        component: MenuComponent
    },
    {
        path: 'item',
        component: ItemComponent
    },
    {
        path: 'addToBasket',
        component: AddToBasketComponent
    },
    {
        path: 'checkout',
        component: CheckoutComponent
    },
    {
        path: 'placeOrder',
        component: PlaceOrderComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
