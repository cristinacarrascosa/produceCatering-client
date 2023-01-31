import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonPlistAdminRoutedComponent } from './salon-plist-admin-routed.component';

describe('SalonPlistAdminRoutedComponent', () => {
  let component: SalonPlistAdminRoutedComponent;
  let fixture: ComponentFixture<SalonPlistAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalonPlistAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalonPlistAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
