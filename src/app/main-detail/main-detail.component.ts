import { Component, OnInit } from '@angular/core';

import { HttpExampleService } from '../http-example.service';

@Component({
  selector: 'app-main-detail',
  templateUrl: './main-detail.component.html',
  styleUrls: ['./main-detail.component.css']
})
export class MainDetailComponent implements OnInit {
  data: any[] = [];
  displayedColumns = ['brand', 'color', 'model', 'category', 'engine', 'year'];

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
