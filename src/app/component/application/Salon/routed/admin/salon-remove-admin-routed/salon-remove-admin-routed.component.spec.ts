import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonRemoveAdminRoutedComponent } from './salon-remove-admin-routed.component';

describe('SalonRemoveAdminRoutedComponent', () => {
  let component: SalonRemoveAdminRoutedComponent;
  let fixture: ComponentFixture<SalonRemoveAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalonRemoveAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalonRemoveAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
