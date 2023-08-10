import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { CustomSnackbarComponent } from 'src/app/components/custom-snackbar/custom-snackbar.component';

@Injectable({
  providedIn: 'root'
})
/**
 * Service for displaying snackbars.
 * you can customize the component in custom-snackbar.component
 * you can pass options by creating an object Partial<MatSnackBarConfig> and pass any of the options. if some are not present, they will default to the ones in the "defaultOptions"
 * the panelClass can be used to put a style on the pop-up, and then can be used in css, see more here:
 * https://material.angular.io/components/snack-bar/examples#snack-bar-annotated-component
 * https://material.angular.io/components/snack-bar/examples#snack-bar-component
 */
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }


  private showSnackbar(message: string, icon: string, options?: Partial<MatSnackBarConfig>): void {
    const defaultOptions: MatSnackBarConfig = {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: 'custom-snackbar',
      politeness: 'assertive',
    };

    const mergedOptions = { ...defaultOptions, ...options };
    const { duration, horizontalPosition, verticalPosition, panelClass, politeness } = mergedOptions;

    this.snackBar.openFromComponent(CustomSnackbarComponent, {
      data: { message, icon }, 
      duration: duration,
      horizontalPosition: horizontalPosition,
      verticalPosition: verticalPosition,
      panelClass: panelClass,
      politeness: politeness
    });
  }

  showInfoSnackbar(message: string, options?: Partial<MatSnackBarConfig>): void {
    const icon = 'i';
    this.showSnackbar(message, icon, options);
  }

  showErrorSnackbar(message: string, options?: Partial<MatSnackBarConfig>): void {
    const icon = 'x';
    this.showSnackbar(message, icon, options);
  }

  showSuccessSnackbar(message: string, options?: Partial<MatSnackBarConfig>): void {
    const icon = 'tick';
    this.showSnackbar(message, icon, options);
  }
}
