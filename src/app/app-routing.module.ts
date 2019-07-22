import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CapacitacionComponent } from './pages/capacitacion/capacitacion.component';
import { TemasComponent } from './pages/temas/temas.component';

const routes: Routes = [
  { path: 'capacitacion', component: CapacitacionComponent },
  { path: 'tema/:id', component: TemasComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'capacitacion' }
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
