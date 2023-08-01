import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';


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

  deleteData(data:any): Observable<any> {
    const httpOptions = {
      body: data
    };
    return this.http.delete<any>(this.backendUrl + '/car', httpOptions);
  }
  
} 
