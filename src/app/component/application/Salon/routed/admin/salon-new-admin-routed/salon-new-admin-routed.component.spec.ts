import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonNewAdminRoutedComponent } from './salon-new-admin-routed.component';

describe('SalonNewAdminRoutedComponent', () => {
  let component: SalonNewAdminRoutedComponent;
  let fixture: ComponentFixture<SalonNewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalonNewAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalonNewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
