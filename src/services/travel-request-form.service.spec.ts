import { TestBed } from '@angular/core/testing';

import { TravelRequestService } from './travel-request-form.service';

describe('TravelRequestFormService', () => {
  let service: TravelRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
