import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { INRCurrComponent } from './inr-curr.component';

describe('INRCurrComponent', () => {
  let component: INRCurrComponent;
  let fixture: ComponentFixture<INRCurrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ INRCurrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(INRCurrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
