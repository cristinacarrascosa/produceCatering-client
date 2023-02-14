import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioPlistUserRoutedComponent } from './servicio-plist-user-routed.component';

describe('ServicioPlistUserRoutedComponent', () => {
  let component: ServicioPlistUserRoutedComponent;
  let fixture: ComponentFixture<ServicioPlistUserRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioPlistUserRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioPlistUserRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
