import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacioPlistAdminRoutedComponent } from './espacio-plist-admin-routed.component';

describe('EspacioPlistAdminRoutedComponent', () => {
  let component: EspacioPlistAdminRoutedComponent;
  let fixture: ComponentFixture<EspacioPlistAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspacioPlistAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspacioPlistAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
