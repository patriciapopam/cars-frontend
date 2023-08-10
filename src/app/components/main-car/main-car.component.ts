import { Component, OnInit } from '@angular/core';
import {AddEditModalButtonComponent} from '../add-edit-modal-button/add-edit-modal-button.component'
@Component({
  selector: 'app-main-car',
  templateUrl: './main-car.component.html',
  styleUrls: ['./main-car.component.css']
})

export class MainCarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  wide_selection() {}
  advanced_search() {}
  add_cars() {}

}
