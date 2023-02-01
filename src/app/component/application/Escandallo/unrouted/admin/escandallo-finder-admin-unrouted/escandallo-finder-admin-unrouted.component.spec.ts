import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscandalloFinderAdminUnroutedComponent } from './escandallo-finder-admin-unrouted.component';

describe('EscandalloFinderAdminUnroutedComponent', () => {
  let component: EscandalloFinderAdminUnroutedComponent;
  let fixture: ComponentFixture<EscandalloFinderAdminUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscandalloFinderAdminUnroutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscandalloFinderAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
