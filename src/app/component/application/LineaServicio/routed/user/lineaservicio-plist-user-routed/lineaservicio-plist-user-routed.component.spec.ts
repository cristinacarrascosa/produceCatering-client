import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaservicioPlistUserRoutedComponent } from './lineaservicio-plist-user-routed.component';

describe('LineaservicioPlistUserRoutedComponent', () => {
  let component: LineaservicioPlistUserRoutedComponent;
  let fixture: ComponentFixture<LineaservicioPlistUserRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineaservicioPlistUserRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineaservicioPlistUserRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
