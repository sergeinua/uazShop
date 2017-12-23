import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliveryComponent } from './delivery.component';

const routes: Routes = [
  { path: '', component: DeliveryComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class DeliveryRoutingModule { }
