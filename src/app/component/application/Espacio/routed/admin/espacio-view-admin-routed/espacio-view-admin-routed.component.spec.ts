import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacioViewAdminRoutedComponent } from './espacio-view-admin-routed.component';

describe('EspacioViewAdminRoutedComponent', () => {
  let component: EspacioViewAdminRoutedComponent;
  let fixture: ComponentFixture<EspacioViewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspacioViewAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspacioViewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
