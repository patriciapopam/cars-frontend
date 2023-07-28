import { TestBed } from '@angular/core/testing';

import { SpinnerHttpinterceptorService } from './spinner-httpinterceptor.service';

describe('SpinnerHttpinterceptorService', () => {
  let service: SpinnerHttpinterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinnerHttpinterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
