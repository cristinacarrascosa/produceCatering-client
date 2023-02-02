import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaservicioPlistAdminRoutedComponent } from './lineaservicio-plist-admin-routed.component';

describe('LineaservicioPlistAdminRoutedComponent', () => {
  let component: LineaservicioPlistAdminRoutedComponent;
  let fixture: ComponentFixture<LineaservicioPlistAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineaservicioPlistAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineaservicioPlistAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
