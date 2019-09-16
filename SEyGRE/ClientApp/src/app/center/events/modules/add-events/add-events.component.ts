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

  public _horaI: Time;
  public _horaF: Time;
  public _tel: number;

  public _lat: Number;
  public _lng: Number;

  public req:string;

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

  }


  public mapClicked($event: MouseEvent) {
    this.markers.push({

      lat: $event.coords.lat,
      lng: $event.coords.lng,
      marker: true

    });

    this._lat = $event.coords.lat;
    this._lng = $event.coords.lng;
    
  }


  markerDragEnd(m: marker, $event: MouseEvent) {
    this._lat = $event.coords.lat;
    this._lng = $event.coords.lng;


  }

  public markerRightClick($event: MouseEvent) {
    this.markers.pop();
    this._lat = "";
    this._lng = "";
    /*tratar de arreglar esto */
  }

  public ObtenerDatos():void {

    let json = JSON.stringify({

      nombre: this._nombre,
      organizador: this._organizador,
      fecha: this._fecha,
      horarioInicio: this._horaI,
      horarioFinal: this._horaF,
      telefono: this._tel,
      latitud: this._lat,
      longitud: this._lng,
      idCentroAcopio: this.idUser,
      idEstatus: 2 /* el evento comienza desactivado por seguridad */

    });

    //console.log(json);


    this.http.post<any>("api/Eventos/InsertarEvento", JSON.parse(json)).subscribe(() => { });

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
          console.log("No se ha encontrado resultados");
        }
      } else {
        console.log("Geocodificacion fallo: " + status);
      }

    });
  }




  iconMap = {

    iconUrl: "http://maps.google.com/mapfiles/ms/micons/recycle.png",
    iconHeigh: 100
  }

  /* no olvides publicar su doble slash */
   /*
    * http:''maps.google.com/mapfiles/ms/micons/grn-pushpin.png    (es el pin de color verde)
    *http:''maps.google.com/mapfiles/ms/micons/recycle.png         (es el logo de reciclar)
    * http:''maps.google.com/mapfiles/ms/micons/rangerstation.png  (es una casa con bandera chiquita)
    * http:''maps.google.com/mapfiles/ms/micons/red-pushpin.png (es un pin color rojo)
    */

  iconMapCurrent = {

    iconUrl: "http://maps.google.com/mapfiles/ms/micons/red-pushpin.png",
    iconHeigh: 100
  }


}


interface marker {

  lat: number;
  lng: number;
  marker: boolean;

}


interface datas { }
