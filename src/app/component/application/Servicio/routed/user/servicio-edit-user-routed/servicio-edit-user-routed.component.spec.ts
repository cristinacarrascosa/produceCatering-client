import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioEditUserRoutedComponent } from './servicio-edit-user-routed.component';

describe('ServicioEditUserRoutedComponent', () => {
  let component: ServicioEditUserRoutedComponent;
  let fixture: ComponentFixture<ServicioEditUserRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioEditUserRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioEditUserRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
