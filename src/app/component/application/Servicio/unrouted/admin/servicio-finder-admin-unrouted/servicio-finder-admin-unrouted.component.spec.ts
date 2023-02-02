import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioFinderAdminUnroutedComponent } from './servicio-finder-admin-unrouted.component';

describe('ServicioFinderAdminUnroutedComponent', () => {
  let component: ServicioFinderAdminUnroutedComponent;
  let fixture: ComponentFixture<ServicioFinderAdminUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioFinderAdminUnroutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioFinderAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
