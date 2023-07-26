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

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CarAppComponent,
    HeaderComponent,
    MainCarComponent,
    FooterComponent,
    CarDetailComponent,
    MainDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatSlideToggleModule,

    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

