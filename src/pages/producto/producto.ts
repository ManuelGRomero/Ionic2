import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Producto}from './productoClass';
import {ProductoService} from '../../providers/productoService'

/*
  Generated class for the Producto page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-producto',
  templateUrl: 'producto.html'+'forma-producto-component.html'
})
export class ProductoPage {
productos:Producto[];
  eliminarProducto:Producto=new Producto();
  constructor(public navCtrl: NavController, public navParams: NavParams, public productoService:ProductoService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductoPage');
    this.productoService.getProductos().subscribe(
  	(data:Producto[])=>{this.productos=data;
  		console.log(JSON.stringify(this.productos));
  	},
  	)
  }
  borrarProducto(eliminarProducto){
    this.productoService.removeProductos(eliminarProducto).subscribe(
      (eliminarProcuto)=>{
        var funciono=eliminarProcuto;
        if(funciono!=null){
          this.ionViewDidLoad();
          alert("El Producto se elimino, apoko no krnal");
        }
      },
      (err)=>{alert("Error, no se pudo eliminar el Producto, Revice el código")}
      )
  }


}
