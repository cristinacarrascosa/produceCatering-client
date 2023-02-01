import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenciaViewAdminRoutedComponent } from './referencia-view-admin-routed.component';

describe('ReferenciaViewAdminRoutedComponent', () => {
  let component: ReferenciaViewAdminRoutedComponent;
  let fixture: ComponentFixture<ReferenciaViewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenciaViewAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferenciaViewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
