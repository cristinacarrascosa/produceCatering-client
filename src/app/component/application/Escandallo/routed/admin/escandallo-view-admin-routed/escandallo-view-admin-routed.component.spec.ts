import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscandalloViewAdminRoutedComponent } from './escandallo-view-admin-routed.component';

describe('EscandalloViewAdminRoutedComponent', () => {
  let component: EscandalloViewAdminRoutedComponent;
  let fixture: ComponentFixture<EscandalloViewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscandalloViewAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscandalloViewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
