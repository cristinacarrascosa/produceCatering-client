import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaescandalloRemoveAdminRoutedComponent } from './lineaescandallo-remove-admin-routed.component';

describe('LineaescandalloRemoveAdminRoutedComponent', () => {
  let component: LineaescandalloRemoveAdminRoutedComponent;
  let fixture: ComponentFixture<LineaescandalloRemoveAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineaescandalloRemoveAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineaescandalloRemoveAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
