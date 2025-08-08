import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAksEditor } from './ng-aks-editor';

describe('NgAksEditor', () => {
  let component: NgAksEditor;
  let fixture: ComponentFixture<NgAksEditor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgAksEditor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgAksEditor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
