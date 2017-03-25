import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//import { Routes, RouterModule } from '@angular/router';
//import{EditarProductoPage} from '../pages/editar-producto/editar-producto';

/*
  Generated class for the RouteProducto provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
/*const routes: Routes = [{
	path: 'IndexProducto',
	component: ProductoComponent
},
{
	path: 'formaProducto',
	component: FormaProductoComponent
},
{
	path: 'editarProducto/:id',
	component: EditarProductoPage
},
];*/
@Injectable()
export class RouteProducto {

  constructor(public http: Http) {
    console.log('Hello RouteProducto Provider');
  }

}
