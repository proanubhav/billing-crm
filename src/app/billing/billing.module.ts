import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingRoutingModule } from './billing-routing.module';
import { CreateBillingComponent } from './create-billing/create-billing.component';
import { SharedModule } from '../shared/shared.module';
import { ShiftEndComponent } from './shift-end/shift-end.component';


@NgModule({
  declarations: [
    CreateBillingComponent,
    ShiftEndComponent
  ],
  imports: [
    CommonModule,
    BillingRoutingModule,
    SharedModule
  ]
})
export class BillingModule { }
