import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscandalloRemoveAdminRoutedComponent } from './escandallo-remove-admin-routed.component';

describe('EscandalloRemoveAdminRoutedComponent', () => {
  let component: EscandalloRemoveAdminRoutedComponent;
  let fixture: ComponentFixture<EscandalloRemoveAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscandalloRemoveAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscandalloRemoveAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
