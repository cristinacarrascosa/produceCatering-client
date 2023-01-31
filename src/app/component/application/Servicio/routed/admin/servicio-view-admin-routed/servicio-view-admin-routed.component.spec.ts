import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioViewAdminRoutedComponent } from './servicio-view-admin-routed.component';

describe('ServicioViewAdminRoutedComponent', () => {
  let component: ServicioViewAdminRoutedComponent;
  let fixture: ComponentFixture<ServicioViewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioViewAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioViewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
