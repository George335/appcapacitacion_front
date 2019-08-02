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

@NgModule({
  declarations: [
    AppComponent,
    TarjetasComponent,
    CapacitacionComponent,
    ItemsComponent,
    TemasComponent,
    BodyComponent,
    HeaderComponent,
    FooterComponent
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
