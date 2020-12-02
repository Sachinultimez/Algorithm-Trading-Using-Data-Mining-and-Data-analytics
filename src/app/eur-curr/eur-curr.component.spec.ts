import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EURCurrComponent } from './eur-curr.component';

describe('EURCurrComponent', () => {
  let component: EURCurrComponent;
  let fixture: ComponentFixture<EURCurrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EURCurrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EURCurrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
