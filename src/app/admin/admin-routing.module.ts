import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { InventoryCheckComponent } from './inventory-check/inventory-check.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormElementComponent } from './form-element/form-element.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'listing',
    component: ListingComponent,
  },
  {
    path: 'inventory-check',
    component: InventoryCheckComponent
  },
  {
    path: 'form-element',
    component: FormElementComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {
  
}