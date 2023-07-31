import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarAppComponent } from './components/car-app/car-app.component';

const routes: Routes = [
  { path: 'car-detail', component: CarDetailComponent },
  { path: '', component: CarAppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
