import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddToCartComponent } from './pages/add-to-cart/add-to-cart.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProfileComponent } from './pages/profile/profile.component';

import { UserComponent } from './user.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent,data: {
    title: 'E-commerce Task'
  } },
  {path:'products',component:ProductsComponent,data: {
    title: 'E-commerce Task'
  }},
  {path:'orders',component:OrdersComponent,data: {
    title: 'E-commerce Task'
  }},
  {path:'cart',component:AddToCartComponent,data: {
    title: 'E-commerce Task'
  }},
  {
    path:'**',component:LandingPageComponent,data: {
      title: 'E-commerce Task'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
