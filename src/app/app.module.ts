import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { CuerpoPrincipalComponent } from './cuerpo-principal/cuerpo-principal.component';
import { PieDePaginaComponent } from './pie-de-pagina/pie-de-pagina.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    CuerpoPrincipalComponent,
    PieDePaginaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
