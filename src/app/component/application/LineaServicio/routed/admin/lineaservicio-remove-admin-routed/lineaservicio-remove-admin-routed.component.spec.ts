import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaservicioRemoveAdminRoutedComponent } from './lineaservicio-remove-admin-routed.component';

describe('LineaservicioRemoveAdminRoutedComponent', () => {
  let component: LineaservicioRemoveAdminRoutedComponent;
  let fixture: ComponentFixture<LineaservicioRemoveAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineaservicioRemoveAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineaservicioRemoveAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
