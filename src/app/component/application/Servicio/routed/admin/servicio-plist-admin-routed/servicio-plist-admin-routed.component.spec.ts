import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioPlistAdminRoutedComponent } from './servicio-plist-admin-routed.component';

describe('ServicioPlistAdminRoutedComponent', () => {
  let component: ServicioPlistAdminRoutedComponent;
  let fixture: ComponentFixture<ServicioPlistAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioPlistAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioPlistAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
