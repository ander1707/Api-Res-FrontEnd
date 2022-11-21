import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarPropietariosComponent } from './eliminar-propietarios.component';

describe('EliminarPropietariosComponent', () => {
  let component: EliminarPropietariosComponent;
  let fixture: ComponentFixture<EliminarPropietariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarPropietariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarPropietariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
