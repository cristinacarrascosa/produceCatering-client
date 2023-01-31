import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioRemoveAdminRoutedComponent } from './servicio-remove-admin-routed.component';

describe('ServicioRemoveAdminRoutedComponent', () => {
  let component: ServicioRemoveAdminRoutedComponent;
  let fixture: ComponentFixture<ServicioRemoveAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioRemoveAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioRemoveAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
