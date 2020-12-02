import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyvaluesComponent } from './currencyvalues.component';

describe('CurrencyvaluesComponent', () => {
  let component: CurrencyvaluesComponent;
  let fixture: ComponentFixture<CurrencyvaluesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyvaluesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyvaluesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
