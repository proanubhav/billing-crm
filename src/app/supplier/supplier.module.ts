import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { SupplierRoutingModule } from './supplier-routing.module';

@NgModule({
  declarations: [
    AddSupplierComponent
  ],
  imports: [
    CommonModule,
    SupplierRoutingModule
  ]
})
export class SupplierModule { }
