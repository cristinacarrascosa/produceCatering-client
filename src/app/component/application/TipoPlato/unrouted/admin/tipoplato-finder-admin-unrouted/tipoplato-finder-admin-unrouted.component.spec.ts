import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoplatoFinderAdminUnroutedComponent } from './tipoplato-finder-admin-unrouted.component';

describe('TipoplatoFinderAdminUnroutedComponent', () => {
  let component: TipoplatoFinderAdminUnroutedComponent;
  let fixture: ComponentFixture<TipoplatoFinderAdminUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoplatoFinderAdminUnroutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoplatoFinderAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
