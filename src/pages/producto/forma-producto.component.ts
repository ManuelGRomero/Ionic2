import { Component, OnInit } from '@angular/core';
import {Producto} from './productoClass';
import {ProductoService} from '../../providers/productoService'


@Component({
  selector: 'app-forma-producto',
  templateUrl: './forma-producto.component.html',
  styleUrls: ['./forma-producto.component.css']
})
export class FormaProductoComponent implements OnInit {
	nuevoProducto:Producto = new Producto();
  constructor(
  	//sirve para solicitar informacion de productos al service
  	private _ProductoService:ProductoService,
  	) { }

  ngOnInit() {
  }
  guardarProducto(){
  	this._ProductoService
    .addProducto(this.nuevoProducto)
    .subscribe(
  		(data)=>{
  			var funciono=data.funciono;
  			if(funciono){
  				//redireccionar 
  				
  			}
  		},
  		(err)=>{}
  		);
  }
  /*borrarProducto(id){
    this._ProductoServiceService.removeProductos(id).subscribe(
      (data)=>{
      var funciono =data.funciono;
      if(funciono){
        this._router.navigate(['IndexProducto']);
      }
    })

  }*/
 
  get imprimirNuevoProducto(){
  	return console.log(JSON.stringify(this.nuevoProducto));
  }
}
