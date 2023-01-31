import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioNewAdminRoutedComponent } from './servicio-new-admin-routed.component';

describe('ServicioNewAdminRoutedComponent', () => {
  let component: ServicioNewAdminRoutedComponent;
  let fixture: ComponentFixture<ServicioNewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioNewAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioNewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
