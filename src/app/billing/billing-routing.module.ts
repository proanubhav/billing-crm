import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBillingComponent } from './create-billing/create-billing.component';

const routes: Routes = [
  {
    path: 'billing/create-billing',
    component: CreateBillingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingRoutingModule { }
