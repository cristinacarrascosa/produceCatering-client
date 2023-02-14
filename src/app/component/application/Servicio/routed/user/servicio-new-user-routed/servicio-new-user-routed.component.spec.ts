import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioNewUserRoutedComponent } from './servicio-new-user-routed.component';

describe('ServicioNewUserRoutedComponent', () => {
  let component: ServicioNewUserRoutedComponent;
  let fixture: ComponentFixture<ServicioNewUserRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioNewUserRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioNewUserRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
