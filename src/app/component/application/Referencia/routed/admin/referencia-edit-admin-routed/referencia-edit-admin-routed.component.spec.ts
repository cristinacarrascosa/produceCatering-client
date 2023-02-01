import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenciaEditAdminRoutedComponent } from './referencia-edit-admin-routed.component';

describe('ReferenciaEditAdminRoutedComponent', () => {
  let component: ReferenciaEditAdminRoutedComponent;
  let fixture: ComponentFixture<ReferenciaEditAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenciaEditAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferenciaEditAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
