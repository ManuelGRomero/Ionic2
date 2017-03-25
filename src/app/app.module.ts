import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import{ClimaPage}from '../pages/clima/clima';
import {ServicioClima}from '../providers/servicio-clima';
import {ProductoPage} from '../pages/producto/producto';
import {ProductoService} from '../providers/productoService';
import {CrearProductoPage} from '../pages/crear-producto/crear-producto';
import { Routes, RouterModule } from '@angular/router';
//import{EditarProductoPage} from '../pages/editar-producto/editar-producto';
//import {RouteProducto} from '../providers/route-producto';

/*const route:Routes = [
{path:'EditarProductoPage',
component: EditarProductoPage}
];*/
@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    ClimaPage,
    ProductoPage,
    CrearProductoPage,
    //EditarProductoPage
    
  ],
  imports: [
    IonicModule.forRoot(MyApp)
    /*RouterModule.forRoot(router)*/
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    ClimaPage,
    ProductoPage,
    CrearProductoPage,
    //EditarProductoPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, ServicioClima,ProductoService]
})
export class AppModule {}
