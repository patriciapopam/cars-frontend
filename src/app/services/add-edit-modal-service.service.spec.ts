import { TestBed } from '@angular/core/testing';

import { AddEditModalServiceService } from './add-edit-modal-service.service';

describe('AddEditModalServiceService', () => {
  let service: AddEditModalServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddEditModalServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
