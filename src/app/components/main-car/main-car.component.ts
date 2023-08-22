import { Component, OnInit } from '@angular/core';
import {AddEditModalButtonComponent} from '../add-edit-modal-button/add-edit-modal-button.component'
import { AddEditModalService } from 'src/app/services/EditModalService/add-edit-modal-service.service';
import { FilterShownService } from 'src/app/services/FilterShownService/filter-shown.service';


@Component({
  selector: 'app-main-car',
  templateUrl: './main-car.component.html',
  styleUrls: ['./main-car.component.css']
})

export class MainCarComponent implements OnInit {

  constructor(private addEditModalService: AddEditModalService,
              public showService: FilterShownService,) { }

  ngOnInit(): void {
  }

  addCar(): void {
    this.addEditModalService.openAddDialog();
  }

  filterShow():void {
    this.showService.filterShow();
    }
  
    filterHide():void {
      this.showService.filterHide();
    }

}
