import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GoodsReceiptNoteComponent } from './goods-receipt-note/goods-receipt-note.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { SkuMasterComponent } from './sku-master/sku-master.component';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';

const routes: Routes = [
  {
    path: 'add',
    component: AddSupplierComponent
  },
  {
    path: 'receipts',
    component: GoodsReceiptNoteComponent
  },
  {
    path: 'list',
    component: SupplierListComponent
  },
  {  
    path: 'sku-master',
    component: SkuMasterComponent
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupplierRoutingModule {
  
}