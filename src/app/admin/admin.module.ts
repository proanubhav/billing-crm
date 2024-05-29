import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoryCheckComponent } from './inventory-check/inventory-check.component';
import { FormElementComponent } from './form-element/form-element.component';
import { ListingComponent } from './listing/listing.component';



@NgModule({
  declarations: [
    DashboardComponent,
    InventoryCheckComponent,
    ListingComponent,
    FormElementComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
