import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoplatoRemoveAdminRoutedComponent } from './tipoplato-remove-admin-routed.component';

describe('TipoplatoRemoveAdminRoutedComponent', () => {
  let component: TipoplatoRemoveAdminRoutedComponent;
  let fixture: ComponentFixture<TipoplatoRemoveAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoplatoRemoveAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoplatoRemoveAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
