import { Component, OnInit } from '@angular/core';

import {animate, state, style, transition, trigger} from '@angular/animations';
import { HttpExampleService } from '../http-example.service';

@Component({
  selector: 'app-main-detail',
  templateUrl: './main-detail.component.html',
  styleUrls: ['./main-detail.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class MainDetailComponent implements OnInit {
  data: any[] = [];
  displayedColumns = ['brand', 'color', 'model', 'category', 'year', 'country'];

  expandedCar: any = null;

  //[{"id":"111","brand":"Dacia","color":"blue","model":"Duster","category":"hatchback","engine":"petrol","year":"2017","fuelType":"petrol","cylinderCapacity":"100","torque":"100","horsePower":"100","country":"romania","transmission":"100"},
  //id
  //brand, model, category, color, year, country
  //engine, fuelType, cylinderCapacity, torque, horsePower, transmission

  constructor(private httpService: HttpExampleService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.httpService.fetchData().subscribe(
      (data) => {
        this.data = data;
      }
    );
  }
}
