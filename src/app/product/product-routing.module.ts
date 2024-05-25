import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddDiscountComponent } from '../add-discount/add-discount.component';

const routes: Routes = [
  {
    path: 'products/add-product',
    component: ProductCreateComponent
  },
  {
    path: 'products/product-list',
    component: ProductListComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
