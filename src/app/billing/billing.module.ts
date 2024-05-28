import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingRoutingModule } from './billing-routing.module';
import { CreateBillingComponent } from './create-billing/create-billing.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CreateBillingComponent
  ],
  imports: [
    CommonModule,
    BillingRoutingModule,
    SharedModule
  ]
})
export class BillingModule { }
