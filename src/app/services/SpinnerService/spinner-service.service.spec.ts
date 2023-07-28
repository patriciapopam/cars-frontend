import { TestBed } from '@angular/core/testing';

import { SpinnerService } from './spinner-service.service';

describe('LoadingServiceService', () => {
  let service: SpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
