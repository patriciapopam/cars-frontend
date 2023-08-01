import { TestBed } from '@angular/core/testing';

import { FilterCarsService } from './filter-cars.service';

describe('FilterCarsService', () => {
  let service: FilterCarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterCarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
