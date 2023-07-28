import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LocalStorageService } from '../LocalStorageService/local-storage.service';

@Injectable({
  providedIn: 'root'
})

/**
 * An HTTP interceptor that adds an authorization header to outgoing requests using a JWT token stored in local storage.
 */

export class AuthorizationHttpInterceptorService implements HttpInterceptor{

  constructor(private localStorageService:LocalStorageService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    

    const authToken= this.localStorageService.getItem("JWT Token");

    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    });

    // Continue with the request by calling the next interceptor or the final HTTP handler
    return next.handle(authReq);
  }
}
