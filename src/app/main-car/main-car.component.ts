import { Component, OnInit } from '@angular/core';

import { HttpExampleService } from '../http-example.service';

@Component({
  selector: 'app-main-car',
  templateUrl: './main-car.component.html',
  styleUrls: ['./main-car.component.css']
})

export class MainCarComponent implements OnInit {
  data: any[] = [];

  constructor(private httpService: HttpExampleService) { }

  ngOnInit(): void {
  }

  fetchData() {
    this.httpService.fetchData().subscribe(
      (data) => {
        this.data = data; // Assign the received JSON data to the 'data' variable
      }
    );
  }

}
