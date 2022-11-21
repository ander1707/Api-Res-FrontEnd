import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPropietariosComponent } from './propietarios/crear-propietarios/crear-propietarios.component';
import { EditarPropietariosComponent } from './propietarios/editar-propietarios/editar-propietarios.component';
import { BuscarPropietariosComponent } from './propietarios/buscar-propietarios/buscar-propietarios.component';
import { CrearAdministradorComponent } from './administrador/crear-administrador/crear-administrador.component';
import { EditarAdministradorComponent } from './administrador/editar-administrador/editar-administrador.component';
import { BuscarAdministradorComponent } from './administrador/buscar-administrador/buscar-administrador.component';
import { CrearHabitanteComponent } from './habitante/crear-habitante/crear-habitante.component';
import { EditarHabitanteComponent } from './habitante/editar-habitante/editar-habitante.component';
import { BuscarHabitanteComponent } from './habitante/buscar-habitante/buscar-habitante.component';
import { CrearTorreComponent } from './torre/crear-torre/crear-torre.component';
import { EditarTorreComponent } from './torre/editar-torre/editar-torre.component';
import { BuscarTorreComponent } from './torre/buscar-torre/buscar-torre.component';
import { CrearFacturaComponent } from './facturacion/crear-factura/crear-factura.component';
import { EnviarFacturaComponent } from './facturacion/enviar-factura/enviar-factura.component';
import { CrearInmuebleComponent } from './inmuebles/crear-inmueble/crear-inmueble.component';
import { EditarInmuebleComponent } from './inmuebles/editar-inmueble/editar-inmueble.component';
import { BuscarInmuebleComponent } from './inmuebles/buscar-inmueble/buscar-inmueble.component';

const routes: Routes = [
  {
    path: 'crear-inmueble',
    component: CrearInmuebleComponent
  },
  {
    path: 'editar-inmueble',
    component: EditarInmuebleComponent
  },
  {
    path: 'buscar-inmueble',
    component: BuscarInmuebleComponent
  },
  {
    path:'crear-propietarios',
    component: CrearPropietariosComponent
  },

  {
    path:'editar-propietarios',
    component: EditarPropietariosComponent
  },

  {
    path:'buscar-propietarios',
    component: BuscarPropietariosComponent
  },

  {
    path:'crear-administrador',
    component: CrearAdministradorComponent
  },
  {
    path:'editar-administrador',
    component: EditarAdministradorComponent
  },

  {
    path:'buscar-administrador',
    component: BuscarAdministradorComponent
  },

  {
    path:'crear-habitante',
    component: CrearHabitanteComponent
  },

  {
    path:'editar-habitante',
    component: EditarHabitanteComponent
  },
  {
    path:'buscar-habitante',
    component: BuscarHabitanteComponent
  },

  {
    path:'crear-administrador',
    component: CrearAdministradorComponent
  },

  {
    path:'editar-administrador',
    component: EditarAdministradorComponent
  },

  {
    path:'buscar-administrador',
    component: BuscarAdministradorComponent
  },

  {
    path:'crear-torre',
    component: CrearTorreComponent
  },

  {
    path:'editar-torre',
    component: EditarTorreComponent
  },

  {
    path:'buscar-torre',
    component: BuscarTorreComponent
  },

  {
    path:'crear-factura',
    component: CrearFacturaComponent
  },

  {
    path:'enviar-factura',
    component: EnviarFacturaComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroRoutingModule { }
