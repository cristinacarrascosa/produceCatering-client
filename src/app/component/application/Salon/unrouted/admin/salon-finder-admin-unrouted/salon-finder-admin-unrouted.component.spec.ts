import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonFinderAdminUnroutedComponent } from './salon-finder-admin-unrouted.component';

describe('SalonFinderAdminUnroutedComponent', () => {
  let component: SalonFinderAdminUnroutedComponent;
  let fixture: ComponentFixture<SalonFinderAdminUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalonFinderAdminUnroutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalonFinderAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
