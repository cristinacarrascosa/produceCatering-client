import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioEditAdminRoutedComponent } from './servicio-edit-admin-routed.component';

describe('ServicioEditAdminRoutedComponent', () => {
  let component: ServicioEditAdminRoutedComponent;
  let fixture: ComponentFixture<ServicioEditAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioEditAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioEditAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
