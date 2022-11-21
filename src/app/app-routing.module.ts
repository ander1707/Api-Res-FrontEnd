import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './plantilla/inicio/inicio.component';
import { ErrorComponent } from './plantilla/error/error.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
{
  path: "inicio",
   component: InicioComponent
},
{
  path: "seguridad",
  loadChildren:() => import("./modulos/seguridad/seguridad.module").then (x => x.SeguridadModule)
},

{
  path: "registro",
  loadChildren:() => import("./modulos/registro/registro.module").then (x => x.RegistroModule)
},

 {
  path: "**",
  component:ErrorComponent
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
