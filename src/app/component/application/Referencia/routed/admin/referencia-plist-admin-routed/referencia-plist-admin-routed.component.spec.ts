import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenciaPlistAdminRoutedComponent } from './referencia-plist-admin-routed.component';

describe('ReferenciaPlistAdminRoutedComponent', () => {
  let component: ReferenciaPlistAdminRoutedComponent;
  let fixture: ComponentFixture<ReferenciaPlistAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenciaPlistAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferenciaPlistAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
