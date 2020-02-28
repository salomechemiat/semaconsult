import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChvComponent } from './chv.component';

describe('ChvComponent', () => {
  let component: ChvComponent;
  let fixture: ComponentFixture<ChvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
