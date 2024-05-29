import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddDiscountComponent } from './add-discount/add-discount.component';
import { ReturnGoodsComponent } from './return-goods/return-goods.component';

const routes: Routes = [
  {
    path: 'add',
    component: ProductCreateComponent
  },
  {
    path: 'list',
    component: ProductListComponent
  },
  {
    path: 'return',
    component: ReturnGoodsComponent,
  },
  {
    path: 'discount',
    component: AddDiscountComponent
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
