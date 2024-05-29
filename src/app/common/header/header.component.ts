import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private router: Router
  ) {
    
  }
  ngOnInIt() {

  }

  addProducts() {
    this.router.navigate(['/product/add'])
  }
  listProducts() {
    this.router.navigate(['/product/list'])
  }
  returnProducts() {
    this.router.navigate(['/product/return'])
  }
  discountProducts() {
    this.router.navigate(['/product/discount'])
  }
  addSupplier() {
    this.router.navigate(['/supplier/add'])
  }
  receiptPrint() {
    this.router.navigate(['/supplier/receipts'])
  }
  listSupplier() {
    this.router.navigate(['/supplier/list'])
  }
  skuMaster() {
    this.router.navigate(['/supplier/sku-master'])
  }
  createBill() {
    this.router.navigate(['/billing/create'])
  }
  shiftEnd() {
    this.router.navigate(['/billing/shift-end'])
  }

}
