import { HttpEvent, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';
import { SnackbarService } from '../SnackBarService/snack-bar-service.service';

@Injectable({
  providedIn: 'root'
})

//TODO: handle more cases, more specifically
/**
 * Service that intercepts HTTP requests and displays a snackbar notification based on the response status code.
 */
export class SnackbarHttpService {

  constructor(private snackbarService: SnackbarService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const config = {
      duration: 3000,
    };

    return next.handle(req).pipe(
      tap(
        (event: HttpEvent<any>): void => {
          if (event instanceof HttpResponse && event.status >= 200 && event.status < 300) {
            // Show a success snackbar for status codes in the range 200-299
            this.snackbarService.showSuccessSnackbar(`Request finished with http code ${event.status}`, config);
          }

        },
        (error: HttpErrorResponse) => {
          if (error.status >= 400) {
            // Show an error snackbar for status codes greater than or equal to 400
            this.snackbarService.showErrorSnackbar(`Request failed with http code ${error.status}`, config);
          }
        }
      )
    );
  }
}
