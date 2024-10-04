import { TestBed } from '@angular/core/testing';

import { NgAksFormsService } from './ng-aks-forms.service';

describe('NgAksFormsService', () => {
  let service: NgAksFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgAksFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
