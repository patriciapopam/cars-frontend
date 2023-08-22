import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterShownService {

  filterShown: boolean = false;
  constructor() { }

  filterShow():void {
    this.filterShown = true;
  }
  filterHide():void {
    this.filterShown = false;
  }
}
