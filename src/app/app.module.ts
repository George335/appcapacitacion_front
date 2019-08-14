import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TarjetasComponent } from './tarjetas/tarjetas/tarjetas.component';
import { CapacitacionComponent } from './pages/capacitacion/capacitacion.component';
import { ItemsComponent } from './shared/items/items.component';
import { AppRoutingModule } from './app-routing.module';
import { TemasComponent } from './pages/temas/temas.component';
import { BodyComponent } from './components/body/body.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { BodyTemasComponent } from './components/body-temas/body-temas.component';
import { BodyAdministradorComponent } from './components/body-administrador/body-administrador.component';
import { CapacitacionAdministradorComponent } from './pages/capacitacion-administrador/capacitacion-administrador.component';
import { TarjetasAdministradorComponent } from './tarjetas/tarjetas-administrador/tarjetas-administrador.component';
import { RegistroUsuarioComponent } from './pages/registro-usuario/registro-usuario.component';
import { BodyRegistroUsuarioComponent } from './components/body-registro-usuario/body-registro-usuario.component';
import { RegistroItemCapacitacionComponent } from './pages/registro-item-capacitacion/registro-item-capacitacion.component';
import { BodyRegistroItemCapacitacionComponent } from './components/body-registro-item-capacitacion/body-registro-item-capacitacion.component';
import { ListadoIsosComponent } from './pages/listado-isos/listado-isos.component';
import { BodyListadoIsosComponent } from './components/body-listado-isos/body-listado-isos.component';
import { FooterAdminComponent } from './components/footer-admin/footer-admin.component';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { RegistroCapacitacionComponent } from './pages/registro-capacitacion/registro-capacitacion.component';
import { BodyRegistroCapacitacionComponent } from './components/body-registro-capacitacion/body-registro-capacitacion.component';
import { VerPreguntasItemCapacitacionComponent } from './pages/ver-preguntas-item-capacitacion/ver-preguntas-item-capacitacion.component';
import { BodyVerPreguntaItemCapacitacionComponent } from './components/body-ver-pregunta-item-capacitacion/body-ver-pregunta-item-capacitacion.component';

@NgModule({
  declarations: [
    AppComponent,
    TarjetasComponent,
    CapacitacionComponent,
    ItemsComponent,
    TemasComponent,
    BodyComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    BodyTemasComponent,
    BodyAdministradorComponent,
    CapacitacionAdministradorComponent,
    TarjetasAdministradorComponent,
    RegistroUsuarioComponent,
    BodyRegistroUsuarioComponent,
    RegistroItemCapacitacionComponent,
    BodyRegistroItemCapacitacionComponent,
    ListadoIsosComponent,
    BodyListadoIsosComponent,
    FooterAdminComponent,
    HeaderAdminComponent,
    RegistroCapacitacionComponent,
    BodyRegistroCapacitacionComponent,
    VerPreguntasItemCapacitacionComponent,
    BodyVerPreguntaItemCapacitacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,    
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
