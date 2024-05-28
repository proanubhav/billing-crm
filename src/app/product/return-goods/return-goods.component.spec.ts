import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnGoodsComponent } from './return-goods.component';

describe('ReturnGoodsComponent', () => {
  let component: ReturnGoodsComponent;
  let fixture: ComponentFixture<ReturnGoodsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReturnGoodsComponent]
    });
    fixture = TestBed.createComponent(ReturnGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
