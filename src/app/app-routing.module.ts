import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CapacitacionComponent } from './pages/capacitacion/capacitacion.component';
import { TemasComponent } from './pages/temas/temas.component';
import { LoginComponent } from './pages/login/login.component';
import { BodyComponent } from './components/body/body.component';
import { BodyTemasComponent } from './components/body-temas/body-temas.component';
import { BodyAdministradorComponent } from './components/body-administrador/body-administrador.component';
import { RegistroUsuarioComponent } from './pages/registro-usuario/registro-usuario.component';
import { BodyRegistroUsuarioComponent } from './components/body-registro-usuario/body-registro-usuario.component';
import { RegistroItemCapacitacionComponent } from './pages/registro-item-capacitacion/registro-item-capacitacion.component';
import { BodyRegistroItemCapacitacionComponent } from './components/body-registro-item-capacitacion/body-registro-item-capacitacion.component';
import { BodyListadoIsosComponent } from './components/body-listado-isos/body-listado-isos.component';
import { BodyRegistroCapacitacionComponent } from './components/body-registro-capacitacion/body-registro-capacitacion.component';
import { VerPreguntasItemCapacitacionComponent } from './pages/ver-preguntas-item-capacitacion/ver-preguntas-item-capacitacion.component';
import { BodyVerPreguntaItemCapacitacionComponent } from './components/body-ver-pregunta-item-capacitacion/body-ver-pregunta-item-capacitacion.component';

const routes: Routes = [
  { path: 'capacitacion', component: CapacitacionComponent },
  { path: 'tema/:id', component: TemasComponent},
  { path: 'login', component: LoginComponent},
  { path: 'inicio', component: BodyComponent},
  { path: 'temas/:id', component: BodyTemasComponent},
  { path: 'inicioPortalAdministrador', component: BodyAdministradorComponent},
  { path: 'registroUsuario', component: BodyRegistroUsuarioComponent},
  { path: 'registroCapacitacion', component: BodyRegistroCapacitacionComponent},
  { path: 'listadoIsos', component: BodyListadoIsosComponent},
  { path: 'registroItemCapacitacion', component: BodyRegistroItemCapacitacionComponent},
  { path: 'verPreguntasItemCapacitacion/:id', component: BodyVerPreguntaItemCapacitacionComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( routes )
  ], 
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
