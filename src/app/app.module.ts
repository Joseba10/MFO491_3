import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Componentes
import { AppComponent } from './app.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ListadoComponent } from './carrito/listado/listado.component';

//Servicios
import { CarritoProductosService } from './providers/carritoproductos';


@NgModule({
  declarations: [
    AppComponent,
    CarritoComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CarritoProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }