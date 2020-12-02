import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { USDCurrComponent } from './usd-curr.component';

describe('USDCurrComponent', () => {
  let component: USDCurrComponent;
  let fixture: ComponentFixture<USDCurrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ USDCurrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(USDCurrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
