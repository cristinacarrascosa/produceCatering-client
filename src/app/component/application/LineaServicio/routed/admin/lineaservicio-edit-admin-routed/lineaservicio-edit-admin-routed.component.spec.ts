import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaservicioEditAdminRoutedComponent } from './lineaservicio-edit-admin-routed.component';

describe('LineaservicioEditAdminRoutedComponent', () => {
  let component: LineaservicioEditAdminRoutedComponent;
  let fixture: ComponentFixture<LineaservicioEditAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineaservicioEditAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineaservicioEditAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
