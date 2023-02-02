import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaservicioViewAdminRoutedComponent } from './lineaservicio-view-admin-routed.component';

describe('LineaservicioViewAdminRoutedComponent', () => {
  let component: LineaservicioViewAdminRoutedComponent;
  let fixture: ComponentFixture<LineaservicioViewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineaservicioViewAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineaservicioViewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
