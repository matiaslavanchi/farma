import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { Dataservice} from '../../providers/dataservice';

@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class ListaPage {
	items = [];
  constructor(public navCtrl: NavController, public service: Dataservice,public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Lista');
    this.service.obtenerdatos().subscribe(
      (datos)=>{
      	this.items=datos;
        for(let data of this.items) {
        console.log(data.nombre);
        console.log(data.direccion);
}

  });
  
}
}