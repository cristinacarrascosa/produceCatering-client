import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacioFinderAdminUnroutedComponent } from './espacio-finder-admin-unrouted.component';

describe('EspacioFinderAdminUnroutedComponent', () => {
  let component: EspacioFinderAdminUnroutedComponent;
  let fixture: ComponentFixture<EspacioFinderAdminUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspacioFinderAdminUnroutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspacioFinderAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
