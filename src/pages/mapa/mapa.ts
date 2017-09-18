import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

declare var google;

@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html'
})
export class MapaPage {

  map: any;

  constructor(public navCtrl: NavController, public http: Http) {
  }

  ionViewWillEnter() {
    this.displayGoogleMap();
    this.getMarkers();
  }

  displayGoogleMap() {
    let latLng = new google.maps.LatLng(-41.133000, -71.317015);
    let mapOptions = {
      center: latLng,
      disableDefaultUI: true,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: [{
    stylers: [
      { hue: "#00ffe6" },
      { saturation: -20 }]},  {featureType: "poi.business", 
      elementType: "labels", 
      stylers: [{ visibility: "off"}]
    }
  ]    }
    this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
  }

  getMarkers() {
    this.http.get('assets//markers/prueba1.json')
    .map((res) => res.json())
    .subscribe(data => {
      this.addMarkersToMap(data);
    });
  }

  addMarkersToMap(markers) {
    for(let marker of markers) {
      var position = new google.maps.LatLng(marker.lat, marker.lng);
      var marcador = new google.maps.Marker({
        position: position, 
        title: marker.nombre  
        //icon: marker.icon
      });
      marcador.setMap(this.map);
      this.addInfoWindowToMarker(marcador,marker);
    }
  }
  addInfoWindowToMarker(marcador, markers) {
    var infoWindowContent = '<div id="content"><h1 id="firstHeading" class="firstHeading">' + markers.nombre + '</h1></div>';
    var infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });
    marcador.addListener('click', () => {
      infoWindow.open(this.map, marcador);
    });

}
}