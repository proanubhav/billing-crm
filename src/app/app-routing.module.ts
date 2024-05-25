
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { SigninComponent } from './admin/signin/signin.component';
import { SignupComponent } from './admin/signup/signup.component';
import { ListingComponent } from './admin/listing/listing.component';
import { NgModule } from '@angular/core';
import { ReturnGoodsComponent } from './return-goods/return-goods.component';
import { AddDiscountComponent } from './add-discount/add-discount.component';
import { ShiftEndComponent } from './shift-end/shift-end.component';
import { InventoryCheckComponent } from './admin/inventory-check/inventory-check.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'listing',
    component: ListingComponent,
  },
  {
    path: 'return-goods',
    component: ReturnGoodsComponent,
  },
  {
    path: 'add-discount',
    component: AddDiscountComponent
  },
  {
    path: 'shift-end',
    component: ShiftEndComponent
  },
  {
    path: 'admin/inventory-check',
    component: InventoryCheckComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
