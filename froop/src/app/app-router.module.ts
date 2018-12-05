import { AddToBasketComponent } from './add-to-basket/add-to-basket.component';
import { MenuComponent } from './menu/menu.component';
import { ItemComponent } from './item/item.component';
import { LandingComponent } from './landing/landing.component';
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
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
