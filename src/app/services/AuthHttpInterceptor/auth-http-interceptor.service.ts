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
import { SpinnerService } from '../LoadingService/loading-service.service';
import { LocalStorageService } from '../LocalStorageService/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationHttpInterceptorService implements HttpInterceptor{

  constructor(private spinnerService:SpinnerService, private localStorageService:LocalStorageService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.show();

    const authToken= this.localStorageService.getItem("JWT Token");

    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    });

    // Continue with the request by calling the next interceptor or the final HTTP handler
    return next.handle(authReq).pipe(
      tap((event: HttpEvent<any>) => {
        // Check if the event is an HTTP response
        if (event instanceof HttpResponse) {
          // add snackbar checks
          this.spinnerService.hide();
        }
      }));
  }
}
