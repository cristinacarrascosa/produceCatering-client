import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaescandalloEditAdminRoutedComponent } from './lineaescandallo-edit-admin-routed.component';

describe('LineaescandalloEditAdminRoutedComponent', () => {
  let component: LineaescandalloEditAdminRoutedComponent;
  let fixture: ComponentFixture<LineaescandalloEditAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineaescandalloEditAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineaescandalloEditAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
