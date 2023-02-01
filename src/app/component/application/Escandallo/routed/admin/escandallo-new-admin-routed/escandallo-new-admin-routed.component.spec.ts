import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscandalloNewAdminRoutedComponent } from './escandallo-new-admin-routed.component';

describe('EscandalloNewAdminRoutedComponent', () => {
  let component: EscandalloNewAdminRoutedComponent;
  let fixture: ComponentFixture<EscandalloNewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscandalloNewAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscandalloNewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
