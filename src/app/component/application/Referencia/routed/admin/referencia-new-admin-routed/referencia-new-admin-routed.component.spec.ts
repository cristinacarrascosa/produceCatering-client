import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenciaNewAdminRoutedComponent } from './referencia-new-admin-routed.component';

describe('ReferenciaNewAdminRoutedComponent', () => {
  let component: ReferenciaNewAdminRoutedComponent;
  let fixture: ComponentFixture<ReferenciaNewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenciaNewAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferenciaNewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
