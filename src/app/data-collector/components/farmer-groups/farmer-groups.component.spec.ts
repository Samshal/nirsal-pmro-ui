import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerGroupsComponent } from './farmer-groups.component';

describe('FarmerGroupsComponent', () => {
  let component: FarmerGroupsComponent;
  let fixture: ComponentFixture<FarmerGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
