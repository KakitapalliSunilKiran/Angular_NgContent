import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcComponent } from './ngc.component';

describe('NgcComponent', () => {
  let component: NgcComponent;
  let fixture: ComponentFixture<NgcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgcComponent]
    });
    fixture = TestBed.createComponent(NgcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
