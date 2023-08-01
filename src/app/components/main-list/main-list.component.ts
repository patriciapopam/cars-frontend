import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { HttpClientService } from 'src/app/services/HttpClientService/HttpClientService';
import { HttpErrorResponse } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent implements OnInit {

  carList: MatTableDataSource<any>;
  displayedColumns: string[] = ['brand', 'category', 'model', 'year', 'action', 'action2'];


  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private httpService: HttpClientService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getCarList();
    this.cdr.detectChanges();
  }

  ngAfterViewInit() {
    this.carList.paginator = this.paginator;
    this.carList.sort = this.sort;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.carList.filter = filterValue.trim().toLowerCase();

    if (this.carList.paginator) {
      this.carList.paginator.firstPage();
    }
  }

  getCarList() {
    this.httpService.getCarData().subscribe(
      (carList) => {
        this.carList = new MatTableDataSource(carList);
      },
      (error: HttpErrorResponse) => {
        console.log(error.status);
      }
    );
  }

}
