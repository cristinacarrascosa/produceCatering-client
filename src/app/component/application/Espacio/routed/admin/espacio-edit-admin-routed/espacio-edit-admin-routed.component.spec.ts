import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacioEditAdminRoutedComponent } from './espacio-edit-admin-routed.component';

describe('EspacioEditAdminRoutedComponent', () => {
  let component: EspacioEditAdminRoutedComponent;
  let fixture: ComponentFixture<EspacioEditAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspacioEditAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspacioEditAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
