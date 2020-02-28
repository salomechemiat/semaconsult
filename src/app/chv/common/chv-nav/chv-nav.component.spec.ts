import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChvNavComponent } from './chv-nav.component';

describe('ChvNavComponent', () => {
  let component: ChvNavComponent;
  let fixture: ComponentFixture<ChvNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChvNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChvNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
