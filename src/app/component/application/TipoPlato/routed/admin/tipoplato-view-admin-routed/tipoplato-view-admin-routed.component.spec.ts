import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoplatoViewAdminRoutedComponent } from './tipoplato-view-admin-routed.component';

describe('TipoplatoViewAdminRoutedComponent', () => {
  let component: TipoplatoViewAdminRoutedComponent;
  let fixture: ComponentFixture<TipoplatoViewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoplatoViewAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoplatoViewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
