import { TestBed } from '@angular/core/testing';

import { HttpClientService } from './HttpClientService.service';

describe('HttpExampleService', () => {
  let service: HttpClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
