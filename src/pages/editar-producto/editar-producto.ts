import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Producto} from '../producto/productoClass';
import {ProductoService} from '../../providers/productoService';
//import {Router, ActivatedRoute, Params} from'@angular/router';

/*
  Generated class for the EditarProducto page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-editar-producto',
  templateUrl: 'editar-producto.html'
})
export class EditarProductoPage {
productos:Producto[];
producto:Producto=new Producto();
  constructor(public navCtrl: NavController, public navParams: NavParams, public productoService: ProductoService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarProductoPage');
     /*this.route.params
.subscribe((Params:NavParams)=>{
   this.productoService.editarProducto(Params['id']).subscribe(
  		(data:Producto[])=>{
  			this.producto = data;
  			console.log(JSON.stringify(this.producto));
  		},
  		(error)=>{},
  		);*/

    }
  }
