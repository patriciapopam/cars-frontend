import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarAppComponent } from './car-app/car-app.component';
import { HeaderComponent } from './header/header.component';
import { MainCarComponent } from './main-car/main-car.component';
import { FooterComponent } from './footer/footer.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { MainDetailComponent } from './main-detail/main-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table'  

import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AuthorizationHttpInterceptorService } from './services/AuthHttpInterceptor/auth-http-interceptor.service';
import { SpinnerComponent } from './loading-spinner/spinner/spinner.component';
import { SpinnerService } from './services/LoadingService/loading-service.service';

@NgModule({
  declarations: [
    AppComponent,
    CarAppComponent,
    HeaderComponent,
    MainCarComponent,
    FooterComponent,
    CarDetailComponent,
    MainDetailComponent,
    SpinnerComponent
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
    MatTableModule
  ],
  providers: [ 
    SpinnerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationHttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

