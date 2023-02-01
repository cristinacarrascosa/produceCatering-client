import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenciaRemoveAdminRoutedComponent } from './referencia-remove-admin-routed.component';

describe('ReferenciaRemoveAdminRoutedComponent', () => {
  let component: ReferenciaRemoveAdminRoutedComponent;
  let fixture: ComponentFixture<ReferenciaRemoveAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenciaRemoveAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferenciaRemoveAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
