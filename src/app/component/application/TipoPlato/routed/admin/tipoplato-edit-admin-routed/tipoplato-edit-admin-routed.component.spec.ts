import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoplatoEditAdminRoutedComponent } from './tipoplato-edit-admin-routed.component';

describe('TipoplatoEditAdminRoutedComponent', () => {
  let component: TipoplatoEditAdminRoutedComponent;
  let fixture: ComponentFixture<TipoplatoEditAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoplatoEditAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoplatoEditAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
