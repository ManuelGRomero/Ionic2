import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Producto provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ProductoService {
private apiURL:string='http://localhost:52964/Producto/'
  constructor(public http: Http) {
    console.log('Hello Producto Provider');
  }
}
