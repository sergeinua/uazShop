import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductComponent } from './product.component';

import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule
  ],
  declarations: [ ProductComponent ]
})
export class ProductModule { }
