import { TestBed } from '@angular/core/testing';

import { SnackbarHttpService } from './snackbar-http.service';

describe('SnackbarHttpService', () => {
  let service: SnackbarHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnackbarHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
