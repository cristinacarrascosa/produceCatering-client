import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenciaFinderAdminUnroutedComponent } from './referencia-finder-admin-unrouted.component';

describe('ReferenciaFinderAdminUnroutedComponent', () => {
  let component: ReferenciaFinderAdminUnroutedComponent;
  let fixture: ComponentFixture<ReferenciaFinderAdminUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenciaFinderAdminUnroutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferenciaFinderAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
