import { TestBed } from '@angular/core/testing';

import { FilterShownService } from './filter-shown.service';

describe('FilterShownService', () => {
  let service: FilterShownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterShownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
