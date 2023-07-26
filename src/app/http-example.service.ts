import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class HttpExampleService {
  private backendUrl = 'http://localhost:8080/data/getAllCars';

  constructor(private http: HttpClient) { }

  fetchData(): Observable<any[]> {
    return this.http.get<any[]>(this.backendUrl);
    /*
    return from(
      fetch(
        this.backendUrl, // the url you are trying to access
        {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'GET', // GET, POST, PUT, DELETE
          mode: 'no-cors' // the most important option
        }
      ));
    */
  }
} 
