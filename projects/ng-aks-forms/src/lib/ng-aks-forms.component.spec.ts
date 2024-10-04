import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAksFormsComponent } from './ng-aks-forms.component';

describe('NgAksFormsComponent', () => {
  let component: NgAksFormsComponent;
  let fixture: ComponentFixture<NgAksFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgAksFormsComponent]
    });
    fixture = TestBed.createComponent(NgAksFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
