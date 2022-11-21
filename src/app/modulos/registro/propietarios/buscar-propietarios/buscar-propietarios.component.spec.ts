import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPropietariosComponent } from './buscar-propietarios.component';

describe('BuscarPropietariosComponent', () => {
  let component: BuscarPropietariosComponent;
  let fixture: ComponentFixture<BuscarPropietariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarPropietariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarPropietariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
