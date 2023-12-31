//TODO: DEPRECATED. TO DELETE (eventually, after reformatting main-list component).

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterCarsService {
  private carList = new BehaviorSubject<any>(null);
  public updatedCarList$: Observable<any> = this.carList.asObservable();

  private brandList = new BehaviorSubject<any>(null);
  public updatedBrandList$: Observable<any> = this.brandList.asObservable();

  private categoryList = new BehaviorSubject<any>(null);
  public updatedCategoryList$: Observable<any> = this.categoryList.asObservable();

  private modelList = new BehaviorSubject<any>(null);
  public updatedModelList$: Observable<any> = this.modelList.asObservable();

  private yearList = new BehaviorSubject<any>(null);
  public updatedYearList$: Observable<any> = this.yearList.asObservable();

  constructor(private http: HttpClient) { }

  updateData(data: any) {
    this.carList.next(data);
  }

  updateFilterLists(brands: any, categories: any, models: any, years: any) {
    this.brandList.next(brands);
    this.categoryList.next(categories);
    this.modelList.next(models);
    this.yearList.next(years);
  }

  updateFilterListWithItem(brand: any, category: any, model: any, year: any) {
    this.brandList.next(this.brandList.value.add(brand));
    this.categoryList.next(this.categoryList.value.add(category));
    this.modelList.next(this.modelList.value.add(model));
    this.yearList.next(this.yearList.value.add(year));
  }
  
}
