import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { SharedModule } from '../shared/shared.module';
import { AddDiscountComponent } from './add-discount/add-discount.component';
import { ReturnGoodsComponent } from './return-goods/return-goods.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductCreateComponent,
    ReturnGoodsComponent,
    AddDiscountComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule
  ]
})
export class ProductModule { }
