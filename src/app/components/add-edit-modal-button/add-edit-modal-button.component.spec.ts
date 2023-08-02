import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditModalButtonComponent } from './add-edit-modal-button.component';

describe('AddEditModalButtonComponent', () => {
  let component: AddEditModalButtonComponent;
  let fixture: ComponentFixture<AddEditModalButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditModalButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditModalButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
