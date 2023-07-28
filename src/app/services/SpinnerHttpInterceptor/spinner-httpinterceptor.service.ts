import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { SpinnerService } from '../SpinnerService/spinner-service.service';
import { LocalStorageService } from '../LocalStorageService/local-storage.service';

@Injectable({
  providedIn: 'root'
})


/**
 * An HTTP interceptor that shows a spinner while a request is being processed.
 */
export class SpinnerHttpinterceptorService implements HttpInterceptor{

  constructor(private spinnerService:SpinnerService, private localStorageService:LocalStorageService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    this.spinnerService.show();

    return next.handle(req).pipe(
      finalize(() => this.spinnerService.hide()));
  }
}
