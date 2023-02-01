import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaescandalloViewAdminRoutedComponent } from './lineaescandallo-view-admin-routed.component';

describe('LineaescandalloViewAdminRoutedComponent', () => {
  let component: LineaescandalloViewAdminRoutedComponent;
  let fixture: ComponentFixture<LineaescandalloViewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineaescandalloViewAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineaescandalloViewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
