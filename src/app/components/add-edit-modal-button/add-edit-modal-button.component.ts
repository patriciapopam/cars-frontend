import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AddEditModalService } from '../../services/add-edit-modal-service.service';

@Component({
  selector: 'app-add-edit-modal-button',
  templateUrl: './add-edit-modal-button.component.html',
  styleUrls: ['./add-edit-modal-button.component.css'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    NgIf,
    MatDialogModule,
  ],
})
export class AddEditModalButtonComponent implements OnInit {

  constructor(private modalService:AddEditModalService) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.modalService.openAddDialog();
  }
  }

