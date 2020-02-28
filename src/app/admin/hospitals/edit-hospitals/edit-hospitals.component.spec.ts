import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHospitalsComponent } from './edit-hospitals.component';

describe('EditHospitalsComponent', () => {
  let component: EditHospitalsComponent;
  let fixture: ComponentFixture<EditHospitalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHospitalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHospitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
