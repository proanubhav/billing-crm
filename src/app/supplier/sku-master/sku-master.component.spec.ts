import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkuMasterComponent } from './sku-master.component';

describe('SkuMasterComponent', () => {
  let component: SkuMasterComponent;
  let fixture: ComponentFixture<SkuMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkuMasterComponent]
    });
    fixture = TestBed.createComponent(SkuMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
