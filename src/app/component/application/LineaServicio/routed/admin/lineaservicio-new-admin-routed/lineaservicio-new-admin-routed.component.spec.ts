import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaservicioNewAdminRoutedComponent } from './lineaservicio-new-admin-routed.component';

describe('LineaservicioNewAdminRoutedComponent', () => {
  let component: LineaservicioNewAdminRoutedComponent;
  let fixture: ComponentFixture<LineaservicioNewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineaservicioNewAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineaservicioNewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
