import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroRoutingModule } from './registro-routing.module';
import { CrearPropietariosComponent } from './propietarios/crear-propietarios/crear-propietarios.component';
import { BuscarPropietariosComponent } from './propietarios/buscar-propietarios/buscar-propietarios.component';
import { EditarPropietariosComponent } from './propietarios/editar-propietarios/editar-propietarios.component';
import { EliminarPropietariosComponent } from './propietarios/eliminar-propietarios/eliminar-propietarios.component';
import { CrearInmuebleComponent } from './inmuebles/crear-inmueble/crear-inmueble.component';
import { BuscarInmuebleComponent } from './inmuebles/buscar-inmueble/buscar-inmueble.component';
import { EditarInmuebleComponent } from './inmuebles/editar-inmueble/editar-inmueble.component';
import { BuscarHabitanteComponent } from './habitante/buscar-habitante/buscar-habitante.component';
import { CrearHabitanteComponent } from './habitante/crear-habitante/crear-habitante.component';
import { EditarHabitanteComponent } from './habitante/editar-habitante/editar-habitante.component';
import { CrearTorreComponent } from './torre/crear-torre/crear-torre.component';
import { BuscarTorreComponent } from './torre/buscar-torre/buscar-torre.component';
import { EditarTorreComponent } from './torre/editar-torre/editar-torre.component';
import { CrearAdministradorComponent } from './administrador/crear-administrador/crear-administrador.component';
import { EditarAdministradorComponent } from './administrador/editar-administrador/editar-administrador.component';
import { BuscarAdministradorComponent } from './administrador/buscar-administrador/buscar-administrador.component';
import { CrearFacturaComponent } from './facturacion/crear-factura/crear-factura.component';
import { EnviarFacturaComponent } from './facturacion/enviar-factura/enviar-factura.component';


@NgModule({
  declarations: [
    CrearPropietariosComponent,
    BuscarPropietariosComponent,
    EditarPropietariosComponent,
    EliminarPropietariosComponent,
    CrearInmuebleComponent,
    BuscarInmuebleComponent,
    EditarInmuebleComponent,
    BuscarHabitanteComponent,
    CrearHabitanteComponent,
    EditarHabitanteComponent,
    CrearTorreComponent,
    BuscarTorreComponent,
    EditarTorreComponent,
    CrearAdministradorComponent,
    EditarAdministradorComponent,
    BuscarAdministradorComponent,
    CrearFacturaComponent,
    EnviarFacturaComponent
  ],
  imports: [
    CommonModule,
    RegistroRoutingModule
  ]
})
export class RegistroModule { }
