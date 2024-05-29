
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('../app/admin/admin.module').then(
        (m) => m.AdminModule
      ),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('../app/product/product.module').then(
        (m) => m.ProductModule
      ),
  },
  {
    path: 'supplier',
    loadChildren: () =>
      import('../app/supplier/supplier.module').then(
        (m) => m.SupplierModule
      ),
  },
  {
    path: 'billing',
    loadChildren: () =>
      import('../app/billing/billing.module').then(
        (m) => m.BillingModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('../app/auth/auth.module').then(
        (m) => m.AuthModule
      ),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
