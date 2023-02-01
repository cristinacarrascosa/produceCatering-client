import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoplatoNewAdminRoutedComponent } from './tipoplato-new-admin-routed.component';

describe('TipoplatoNewAdminRoutedComponent', () => {
  let component: TipoplatoNewAdminRoutedComponent;
  let fixture: ComponentFixture<TipoplatoNewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoplatoNewAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoplatoNewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
