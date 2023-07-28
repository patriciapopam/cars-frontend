import { TestBed } from '@angular/core/testing';

import { AuthorizationHttpInterceptorService } from './auth-http-interceptor.service';

describe('HttpInterceptorService', () => {
  let service: AuthorizationHttpInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorizationHttpInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
