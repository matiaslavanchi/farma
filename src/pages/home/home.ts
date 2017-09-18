import { FarmaciaPage } from './../farmacia/farmacia';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { MapaPage } from "../mapa/mapa";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController) {

  }
  mostrarFarmacias(){
    this.navCtrl.push(FarmaciaPage)
  }
  mostrarMapa(){
    this.navCtrl.push(MapaPage)
  }
  mostrarListaFarmacias(){
    let modal = this.modalCtrl
    .create(FarmaciaPage);

    modal.present();
    
  }
  

}
