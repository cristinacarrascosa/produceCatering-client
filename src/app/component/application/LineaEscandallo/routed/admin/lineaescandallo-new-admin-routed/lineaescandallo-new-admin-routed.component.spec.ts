import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaescandalloNewAdminRoutedComponent } from './lineaescandallo-new-admin-routed.component';

describe('LineaescandalloNewAdminRoutedComponent', () => {
  let component: LineaescandalloNewAdminRoutedComponent;
  let fixture: ComponentFixture<LineaescandalloNewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineaescandalloNewAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineaescandalloNewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
