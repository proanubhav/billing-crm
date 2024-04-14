import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';

const routes: Routes = [
  {
    path: 'supplier/add-supplier',
    component: AddSupplierComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class SupplierRoutingModule {
  
}