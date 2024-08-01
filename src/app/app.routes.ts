import { Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import path from 'path';
import { CartComponent } from './cart/cart/cart.component';
import { CheckoutContentComponent } from './checkout/checkout-content/checkout-content.component';

export const routes: Routes = [
    {
        path:"",
        component:ProductListComponent
        
    },
    {
        path:"cart",
    component:CartComponent
    },
    {
        path:"checkout",
        component:CheckoutContentComponent
    }
];

