import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAksForms } from './ng-aks-forms';

describe('NgAksForms', () => {
  let component: NgAksForms;
  let fixture: ComponentFixture<NgAksForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgAksForms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgAksForms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
