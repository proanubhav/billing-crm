import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsReceiptNoteComponent } from './goods-receipt-note.component';

describe('GoodsReceiptNoteComponent', () => {
  let component: GoodsReceiptNoteComponent;
  let fixture: ComponentFixture<GoodsReceiptNoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoodsReceiptNoteComponent]
    });
    fixture = TestBed.createComponent(GoodsReceiptNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
