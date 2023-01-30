import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacioRemoveAdminRoutedComponent } from './espacio-remove-admin-routed.component';

describe('EspacioRemoveAdminRoutedComponent', () => {
  let component: EspacioRemoveAdminRoutedComponent;
  let fixture: ComponentFixture<EspacioRemoveAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspacioRemoveAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspacioRemoveAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
