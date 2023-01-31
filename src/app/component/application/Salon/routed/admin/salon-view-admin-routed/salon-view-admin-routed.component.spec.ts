import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonViewAdminRoutedComponent } from './salon-view-admin-routed.component';

describe('SalonViewAdminRoutedComponent', () => {
  let component: SalonViewAdminRoutedComponent;
  let fixture: ComponentFixture<SalonViewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalonViewAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalonViewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
