import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './admin/common/header/header.component';
import { FooterComponent } from './admin/common/footer/footer.component';
import { SidebarComponent } from './admin/common/sidebar/sidebar.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
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
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
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
    
    BrowserAnimationsModule,
  ]
})
export class AppModule { }
