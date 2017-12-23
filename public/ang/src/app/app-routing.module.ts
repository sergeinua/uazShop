import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'delivery', loadChildren: './delivery/delivery.module#DeliveryModule', pathMatch: 'full' },
  { path: 'about', loadChildren: './about/about.module#AboutModule', pathMatch: 'full' },
  { path: 'category/:categoryId', loadChildren: './category/category.module#CategoryModule' },
  { path: 'product/:productId', loadChildren: './product/product.module#ProductModule' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
