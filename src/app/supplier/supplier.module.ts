import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { SupplierRoutingModule } from './supplier-routing.module';
import { SharedModule } from '../admin/common/shared.module';
import { GoodsReceiptNoteComponent } from './goods-receipt-note/goods-receipt-note.component';
import { SkuMasterComponent } from './sku-master/sku-master.component';


@NgModule({
  declarations: [
    AddSupplierComponent,
    GoodsReceiptNoteComponent,
    SkuMasterComponent
  ],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    SharedModule
  ]
})
export class SupplierModule { }
