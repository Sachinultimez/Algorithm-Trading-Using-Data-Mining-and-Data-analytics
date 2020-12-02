import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AAPLComponent } from './aapl.component';

describe('AAPLComponent', () => {
  let component: AAPLComponent;
  let fixture: ComponentFixture<AAPLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AAPLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AAPLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
