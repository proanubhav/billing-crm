import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { SharedModule } from '../admin/common/shared.module';
import { GoodsReceiptNoteComponent } from './goods-receipt-note/goods-receipt-note.component';
import { SkuMasterComponent } from './sku-master/sku-master.component';

const routes: Routes = [
  {
    path: 'supplier/add-supplier',
    component: AddSupplierComponent
  },
  {
    path: 'supplier/goods-receipt-note',
    component: GoodsReceiptNoteComponent
  },
  {
    path: 'supplier/sku-master',
    component: SkuMasterComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class SupplierRoutingModule {
  
}