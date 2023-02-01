import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaescandalloPlistAdminRoutedComponent } from './lineaescandallo-plist-admin-routed.component';

describe('LineaescandalloPlistAdminRoutedComponent', () => {
  let component: LineaescandalloPlistAdminRoutedComponent;
  let fixture: ComponentFixture<LineaescandalloPlistAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineaescandalloPlistAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineaescandalloPlistAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
