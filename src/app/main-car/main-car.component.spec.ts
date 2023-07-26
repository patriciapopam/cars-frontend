import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCarComponent } from './main-car.component';

describe('MainCarComponent', () => {
  let component: MainCarComponent;
  let fixture: ComponentFixture<MainCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
