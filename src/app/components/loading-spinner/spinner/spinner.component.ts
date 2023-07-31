import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpinnerService } from 'src/app/services/SpinnerService/spinner-service.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
  standalone:true,
  imports:[MatProgressSpinnerModule,NgIf]
})
export class SpinnerComponent implements OnDestroy {
  showSpinner = false;
  private subscription: Subscription;

  constructor(private spinnerService: SpinnerService) {
    this.subscription = this.spinnerService.loading$.subscribe((loading) => {
      this.showSpinner = loading;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}