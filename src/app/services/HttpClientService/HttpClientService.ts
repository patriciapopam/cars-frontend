import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarObject } from 'src/models/CarObject';


@Injectable({
  providedIn: 'root'
})

/**
 * Service for making HTTP requests using Angular's HttpClient module.
 */
export class HttpClientService {  
  private backendUrl = 'http://localhost:8080/data';

  constructor(private http: HttpClient) { }

  fetchData(): Observable<any[]> {
    return this.http.get<any[]>(this.backendUrl + '/getAllCars');
  }

  getCarData(): Observable<any[]> {
    return this.http.get<any[]>(this.backendUrl + '/getAllCarSummary');
  }

  getCarDataById(id: string): Observable<CarObject> {
    const httpOptions = {
        'id': id
    };
    return this.http.post<CarObject>(this.backendUrl + '/getCarDetail/', httpOptions);
  }

  deleteCar(carid: string): Observable<any> {
    const httpOptions = {
      body: {
        'id': carid
      }
    };
    return this.http.delete<any>(this.backendUrl + '/car', httpOptions);
  }

  editCar(id: string, car: CarObject): Observable<any> {
    const httpOptions = {
      "id": id,
      "brand": car.brand,
      "color": car.color,
      "model": car.model,
      "category": car.category,
      "engine": car.engine,
      "year": car.year,
      "fuelType": car.fuelType,
      "cylinderCapacity": car.cylinderCapacity,
      "torque": car.torque,
      "horsePower": car.horsePower,
      "country": car.country,
      "transmission": car.transmission
    };
    return this.http.put<any>(this.backendUrl + '/car', httpOptions);
  }

  addCar(car: CarObject): Observable<any> {
    const httpOptions = {
      "brand": car.brand,
      "color": car.color,
      "model": car.model,
      "category": car.category,
      "engine": car.engine,
      "year": car.year,
      "fuelType": car.fuelType,
      "cylinderCapacity": car.cylinderCapacity,
      "torque": car.torque,
      "horsePower": car.horsePower,
      "country": car.country,
      "transmission": car.transmission};
    return this.http.post<any>(this.backendUrl + '/car', httpOptions);
  }
  
  filterByMultipleSelection(filterCriteria: any): Observable<any[]> {
    const httpOptions = {
      'brand': filterCriteria.brand,
      'model': filterCriteria.model,
      'category': filterCriteria.category,
      'year': filterCriteria.year
    };
    return this.http.post<any[]>(this.backendUrl + '/filterCarByMultipleSelection', httpOptions);
  }
} 
