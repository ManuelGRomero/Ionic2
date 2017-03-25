import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ServicioClima}from '../../providers/servicio-clima';
/*
  Generated class for the Clima page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-clima',
  templateUrl: 'clima.html'
})
export class ClimaPage {
pronostico:any[];
ciudad;

  constructor(public navCtrl: NavController,
  	public navParams: NavParams,
  	public _ServicioClima:ServicioClima) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClimaPage');
    this._ServicioClima.getPronosticos().subscribe(
    	(data:any)=>{

        let contador=0;
        this.pronostico=data.list;
        //let fechahoy=new Date();
        for(let dia of this.pronostico){
          dia.fecha=new Date();
          dia.fecha.setDate(dia.fecha.getDate()+contador)
          contador++;
          /*let fecha=fechahoy;
          dia.fecha=fecha;
          fecha.setDate(fecha.getDay()+1);*/
        }
    		/*this.pronostico=data.list;
    		this.ciudad=data.city;
    		console.log(this.pronostico);
    		console.log(this.ciudad);*/
    	},(err)=>{
    		console.log(err);
    	}
    	)
  }

}
