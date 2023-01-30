import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacioNewAdminRoutedComponent } from './espacio-new-admin-routed.component';

describe('EspacioNewAdminRoutedComponent', () => {
  let component: EspacioNewAdminRoutedComponent;
  let fixture: ComponentFixture<EspacioNewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspacioNewAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspacioNewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
