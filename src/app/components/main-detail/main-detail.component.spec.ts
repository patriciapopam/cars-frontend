import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDetailComponent } from './main-detail.component';

describe('MainDetailComponent', () => {
  let component: MainDetailComponent;
  let fixture: ComponentFixture<MainDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
