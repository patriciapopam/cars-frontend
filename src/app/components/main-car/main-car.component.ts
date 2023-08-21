import { Component, OnInit } from '@angular/core';
import {AddEditModalButtonComponent} from '../add-edit-modal-button/add-edit-modal-button.component'
import { AddEditModalService } from 'src/app/services/EditModalService/add-edit-modal-service.service';


@Component({
  selector: 'app-main-car',
  templateUrl: './main-car.component.html',
  styleUrls: ['./main-car.component.css']
})

export class MainCarComponent implements OnInit {

  constructor(private addEditModalService: AddEditModalService,) { }

  ngOnInit(): void {
  }

  addCar(): void {
    this.addEditModalService.openAddDialog();
  }

}
