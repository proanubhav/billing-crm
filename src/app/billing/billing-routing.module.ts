import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBillingComponent } from './create-billing/create-billing.component';
import { ShiftEndComponent } from './shift-end/shift-end.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateBillingComponent
  },
  {
    path: 'shift-end',
    component: ShiftEndComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingRoutingModule { }
