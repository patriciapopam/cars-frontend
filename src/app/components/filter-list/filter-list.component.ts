import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FilterCarsService } from 'src/app/services/FilterCarService/filter-cars.service';
import { HttpClientService } from 'src/app/services/HttpClientService/HttpClientService.service';


@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.css']
})
export class FilterListComponent implements OnInit {
  filteredCarList: any[] = [];

  brands = new FormControl('');
  categories = new FormControl('');
  models = new FormControl('');
  years = new FormControl('');

  brandList: string[];
  categoryList: string[];
  modelList: string[];
  yearList: string[];

  applyFilter() {
    const filteredCar: CarObject = {
      brand: this.brands.value,
      category: this.categories.value,
      model: this.models.value,
      year: this.years.value
    };

    console.log(filteredCar);

    this.httpService.filterByMultipleSelection(filteredCar).subscribe(
      (carList) => {
        this.filteredCarList = carList;
        this.filterCarsService.updateData(this.filteredCarList);
      },
      (error: HttpErrorResponse) => {
        console.log(error.status);
      }
    );


  }

  clearFilter() {
    this.brands.reset();
    this.categories.reset();
    this.models.reset();
    this.years.reset();

    this.httpService.getCarData().subscribe(
      (carList) => {
        this.filteredCarList = carList;
        this.filterCarsService.updateData(this.filteredCarList);
      },
      (error: HttpErrorResponse) => {
        console.log(error.status);
      }
    );
  }

  constructor(private filterCarsService: FilterCarsService, 
              private httpService: HttpClientService) { }

  ngOnInit(): void {
    this.filterCarsService.updatedBrandList$.subscribe((data) => {
      this.brandList = data;
    });

    this.filterCarsService.updatedCategoryList$.subscribe((data) => {
      this.categoryList = data;
    });

    this.filterCarsService.updatedModelList$.subscribe((data) => {
      this.modelList = data;
    });

    this.filterCarsService.updatedYearList$.subscribe((data) => {
      this.yearList = data;
    });
  }

}

interface CarObject {
  brand: string | null;
  category: string | null;
  model: string | null;
  year: string | null;
}