import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarAppComponent } from './components/car-app/car-app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainCarComponent } from './components/main-car/main-car.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { MainDetailComponent } from './components/main-detail/main-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table'  

import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AuthorizationHttpInterceptorService } from './services/AuthHttpInterceptor/auth-http-interceptor.service';
import { SpinnerComponent } from './components/loading-spinner/spinner/spinner.component';
import { SpinnerService } from './services/SpinnerService/spinner-service.service';
import { SpinnerHttpinterceptorService } from './services/SpinnerHttpInterceptor/spinner-httpinterceptor.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackbarHttpService } from './services/SnackBarHttpInterceptor/snackbar-http.service';
import { CustomSnackbarComponent } from './components/custom-snackbar/custom-snackbar.component';
import { AddEditModalComponent } from './components/add-edit-modal/add-edit-modal.component';
import { AddEditModalButtonComponent } from './components/add-edit-modal-button/add-edit-modal-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CarAppComponent,
    HeaderComponent,
    MainCarComponent,
    FooterComponent,
    CarDetailComponent,
    MainDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatSlideToggleModule,
    MatIconModule,
    MatToolbarModule,
    MatCheckboxModule,
    HttpClientModule,
    MatTableModule,
    SpinnerComponent,
    MatSnackBarModule,
    CustomSnackbarComponent,
    AddEditModalComponent,
    AddEditModalButtonComponent,
    
  ],
  providers: [ 
    SpinnerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationHttpInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerHttpinterceptorService,
      multi:true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SnackbarHttpService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

