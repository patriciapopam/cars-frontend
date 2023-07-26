import { TestBed } from '@angular/core/testing';

import { HttpExampleService } from './http-example.service';

describe('HttpExampleService', () => {
  let service: HttpExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
