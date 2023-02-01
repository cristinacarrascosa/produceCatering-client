import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscandalloPlistAdminRoutedComponent } from './escandallo-plist-admin-routed.component';

describe('EscandalloPlistAdminRoutedComponent', () => {
  let component: EscandalloPlistAdminRoutedComponent;
  let fixture: ComponentFixture<EscandalloPlistAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscandalloPlistAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscandalloPlistAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
