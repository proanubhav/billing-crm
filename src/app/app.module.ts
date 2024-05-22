import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { SigninComponent } from './admin/signin/signin.component';
import { SignupComponent } from './admin/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { FormElementComponent } from './admin/form-element/form-element.component';
import { ListingComponent } from './admin/listing/listing.component';
import { SupplierRoutingModule } from './supplier/supplier-routing.module';
import { SharedModule } from './admin/common/shared.module';
import { ProductRoutingModule } from './product/product-routing.module';
import { BillingRoutingModule } from './billing/billing-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    
    
    
    DashboardComponent,
    SigninComponent,
    SignupComponent,
    FormElementComponent,
    ListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SupplierRoutingModule,
    ProductRoutingModule,
    BillingRoutingModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],

  exports: [
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    SharedModule,
    BrowserAnimationsModule,
  ]
})
export class AppModule { }
