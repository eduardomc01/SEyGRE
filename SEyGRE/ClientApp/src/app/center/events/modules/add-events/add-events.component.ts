import { Component, ElementRef, ViewChild, NgZone, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MouseEvent, MapsAPILoader } from '@agm/core';
import { Time } from '@angular/common';

@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.css']
})
export class AddEventsComponent implements OnInit {

  public _nombre: string;
  public _organizador: string;
  public _fecha: Date;
  public _hora: Time;

  public _lat: Number;
  public _lng: Number;

  public markers: marker[] = [];

  private idUser: string = sessionStorage.getItem("idUser");

  latitude: number;
  longitude: number;
  address: string;
  public d: datas[];
  private geoCoder;

  @ViewChild('search')
  public searchElementRef: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private http: HttpClient, private router: Router) {

    if (this.idUser == null)
      this.router.navigate(["/"]);

  };


  public mapClicked($event: MouseEvent) {
    this.markers.push({

      lat: $event.coords.lat,
      lng: $event.coords.lng

    });

    this._lat = $event.coords.lat;
    this._lng = $event.coords.lng;

  }


  public markerRightClick($event: MouseEvent) {
    this.markers.pop();
    this._lat = null;
    this._lng = null;

  }

  ObtenerDatos() {

    let json = JSON.stringify({

      nombre: this._nombre,
      organizador: this._organizador,
      fecha: this._fecha,
      horario: this._hora,
      latitud: this._lat,
      longitud: this._lng,
      idCentroAcopio: this.idUser


    });

    console.log(json);


    this.http.post("api/Eventos/InsertarEvento", JSON.parse(json)).subscribe(() => { });

  }



  ngOnInit() {
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });




      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();

        });

      });




    });

  }

  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ("geolocation" in navigator) {

      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.getAddress(this.latitude, this.longitude);

      });
    }
  }


  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ "location": { lat: latitude, lng: longitude } }, (results, status) => {

      if (status === "OK") {
        if (results[0]) {
          this.address = results[0].formatted_address;
        } else {
          console.log("No se encontrador resultados");
        }
      } else {
        console.log("Geocodificacion fallo: " + status);
      }

    });
  }


  public login() {
    this.router.navigate(["/Login"]);
  }

  iconMap = {

    iconUrl: "http://maps.google.com/mapfiles/kml/paddle/grn-stars.png",
    iconHeigh: 20
  }


  iconMapCurrent = {

    iconUrl: "http://labs.google.com/ridefinder/images/mm_20_red.png",
    iconHeigh: 20
  }


}


interface marker {

  lat: number;
  lng: number;

}


interface datas { }
