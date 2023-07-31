import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarAppComponent } from './car-app.component';

describe('CarAppComponent', () => {
  let component: CarAppComponent;
  let fixture: ComponentFixture<CarAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
