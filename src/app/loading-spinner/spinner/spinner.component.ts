import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpinnerService } from 'src/app/services/LoadingService/loading-service.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent implements OnDestroy {
  showSpinner = false;
  private subscription: Subscription;

  constructor(private spinnerService: SpinnerService) {
    this.subscription = this.spinnerService.loading$.subscribe((loading) => {
      console.log('loading$ emitted:', loading);
      this.showSpinner = loading;
      console.log('showSpinner:', this.showSpinner);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}