import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscandalloEditAdminRoutedComponent } from './escandallo-edit-admin-routed.component';

describe('EscandalloEditAdminRoutedComponent', () => {
  let component: EscandalloEditAdminRoutedComponent;
  let fixture: ComponentFixture<EscandalloEditAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscandalloEditAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscandalloEditAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
