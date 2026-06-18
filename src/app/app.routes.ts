import { Routes } from '@angular/router';

import { HomeComponent } from './home/home';
import { ProductsComponent } from './products/products';
import { CartComponent } from './cart/cart';
import { CheckoutComponent } from './checkout/checkout';
import { AboutComponent } from './about/about';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'about', component: AboutComponent },

  { path: '**', redirectTo: 'home' }
];