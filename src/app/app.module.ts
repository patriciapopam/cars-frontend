import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
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
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AuthorizationHttpInterceptorService } from './services/AuthHttpInterceptor/auth-http-interceptor.service';
import { SpinnerComponent } from './components/loading-spinner/spinner/spinner.component';
import { SpinnerService } from './services/SpinnerService/spinner-service.service';
import { SpinnerHttpinterceptorService } from './services/SpinnerHttpInterceptor/spinner-httpinterceptor.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackbarHttpService } from './services/SnackBarHttpInterceptor/snackbar-http.service';
import { CustomSnackbarComponent } from './components/custom-snackbar/custom-snackbar.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { MainListComponent } from './components/main-list/main-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddEditModalComponent } from './components/add-edit-modal/add-edit-modal.component';
import { AddEditModalButtonComponent } from './components/add-edit-modal-button/add-edit-modal-button.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FilterListComponent } from './components/filter-list/filter-list.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AddCarPageComponent } from './components/add-car-page/add-car-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { AuthEffects } from '../app/Ngrx/Ngrx-effects/auth.effects';
import { authReducer } from './Ngrx/Ngrx-reducer/auth.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CarAppComponent,
    HeaderComponent,
    MainCarComponent,
    FooterComponent,
    CarDetailComponent,
    MainDetailComponent,
    CarListComponent,
    AddEditModalComponent,
    MainListComponent,
    FilterListComponent,
    ConfirmationModalComponent,
    SideNavbarComponent,
    AddCarPageComponent,
    LoginFormComponent,
    LoginPageComponent,
  ],
  imports: [
    RouterModule,
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
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatPaginatorModule,
    SpinnerComponent,
    CustomSnackbarComponent,
    ReactiveFormsModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatSelectModule,
    AddEditModalButtonComponent,
    MatSidenavModule,
    MatListModule,
    EffectsModule.forRoot([AuthEffects]),
    StoreModule.forRoot({ auth: authReducer }),
  ],
  providers: [
    SpinnerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationHttpInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerHttpinterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SnackbarHttpService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
