import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MFSLComponent } from './mfsl.component';

describe('MFSLComponent', () => {
  let component: MFSLComponent;
  let fixture: ComponentFixture<MFSLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MFSLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MFSLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
