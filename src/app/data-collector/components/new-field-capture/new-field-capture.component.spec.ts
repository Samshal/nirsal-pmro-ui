import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFieldCaptureComponent } from './new-field-capture.component';

describe('NewFieldCaptureComponent', () => {
  let component: NewFieldCaptureComponent;
  let fixture: ComponentFixture<NewFieldCaptureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFieldCaptureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFieldCaptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
