import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarAppComponent } from './components/car-app/car-app.component';
import { CarListComponent } from './components/car-list/car-list.component';

const routes: Routes = [
  { path: 'car-list', component: CarListComponent},
  { path: 'car-detail', component: CarDetailComponent },
  { path: '', component: CarAppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
