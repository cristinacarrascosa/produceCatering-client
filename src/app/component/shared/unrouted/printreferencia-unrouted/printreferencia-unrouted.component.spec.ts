import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintreferenciaUnroutedComponent } from './printreferencia-unrouted.component';

describe('PrintreferenciaUnroutedComponent', () => {
  let component: PrintreferenciaUnroutedComponent;
  let fixture: ComponentFixture<PrintreferenciaUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintreferenciaUnroutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintreferenciaUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
