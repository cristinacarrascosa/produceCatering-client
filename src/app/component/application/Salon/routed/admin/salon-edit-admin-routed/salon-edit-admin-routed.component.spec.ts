import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonEditAdminRoutedComponent } from './salon-edit-admin-routed.component';

describe('SalonEditAdminRoutedComponent', () => {
  let component: SalonEditAdminRoutedComponent;
  let fixture: ComponentFixture<SalonEditAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalonEditAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalonEditAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
