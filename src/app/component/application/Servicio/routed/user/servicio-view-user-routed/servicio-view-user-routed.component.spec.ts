import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioViewUserRoutedComponent } from './servicio-view-user-routed.component';

describe('ServicioViewUserRoutedComponent', () => {
  let component: ServicioViewUserRoutedComponent;
  let fixture: ComponentFixture<ServicioViewUserRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioViewUserRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioViewUserRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
