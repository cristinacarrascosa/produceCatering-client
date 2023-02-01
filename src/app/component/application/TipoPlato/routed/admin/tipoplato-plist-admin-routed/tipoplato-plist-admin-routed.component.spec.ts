import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoplatoPlistAdminRoutedComponent } from './tipoplato-plist-admin-routed.component';

describe('TipoplatoPlistAdminRoutedComponent', () => {
  let component: TipoplatoPlistAdminRoutedComponent;
  let fixture: ComponentFixture<TipoplatoPlistAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoplatoPlistAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoplatoPlistAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
