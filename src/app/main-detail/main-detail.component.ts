import { Component, OnInit } from '@angular/core';

import {animate, state, style, transition, trigger} from '@angular/animations';
import {SelectionModel} from '@angular/cdk/collections';
import { HttpClientService } from '../services/HttpClientService/HttpClientService';

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

  selection = new SelectionModel<any>(true, []);
  //[{"id":"111","brand":"Dacia","color":"blue","model":"Duster","category":"hatchback","engine":"petrol","year":"2017","fuelType":"petrol","cylinderCapacity":"100","torque":"100","horsePower":"100","country":"romania","transmission":"100"},
  //id
  //brand, model, category, color, year, country
  //engine, fuelType, cylinderCapacity, torque, horsePower, transmission

  constructor(private httpService: HttpClientService) { }

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

  pasttest: any = null;
  test: any = null;

  deleteSelected() {
    this.pasttest = this.test;
    this.test = this.selection.selected;
    
    this.test.forEach( (element: any) => {
      this.httpService.deleteData(element).subscribe(
        (data) => {
          this.fetchData();
        }
      );
    });
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.data);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.data.length;
    return numSelected === numRows;
  }
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  showSelect() {
    if (this.displayedColumns[0] === 'select') {
      this.displayedColumns.shift();
    }
    else {
      this.displayedColumns.unshift('select');
    }
  }
}
