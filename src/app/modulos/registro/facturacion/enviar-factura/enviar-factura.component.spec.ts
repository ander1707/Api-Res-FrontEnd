import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarFacturaComponent } from './enviar-factura.component';

describe('EnviarFacturaComponent', () => {
  let component: EnviarFacturaComponent;
  let fixture: ComponentFixture<EnviarFacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviarFacturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnviarFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
