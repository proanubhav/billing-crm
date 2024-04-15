import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { SupplierRoutingModule } from './supplier-routing.module';
import { SharedModule } from '../admin/common/shared.module';


@NgModule({
  declarations: [
    AddSupplierComponent
  ],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    SharedModule
  ]
})
export class SupplierModule { }
