import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory-check',
  templateUrl: './inventory-check.component.html',
  styleUrls: ['./inventory-check.component.scss']
})
export class InventoryCheckComponent {
  activeTab: string = 'product-end';

  toggleDiv(tab: string) {
    this.activeTab = tab;
  }
}
