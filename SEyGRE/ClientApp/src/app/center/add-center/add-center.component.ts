import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MouseEvent, MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-add-center',
  templateUrl: './add-center.component.html',
  styleUrls: ['./add-center.component.css']
})

export class AddCenterComponent implements OnInit {

  public _usuario: string;
  public _password: string;

  public _nombre: string;
  public _correo: string;

  public _direccion: string;

  public title: string = "CENTRO";
  public _lat: Number;
  public _lng: Number;
  public markers: marker[] = [];

  public idUser: string;

  latitude: number;
  longitude: number;
  address: string;
  public d: datas[];
  private geoCoder;

  @ViewChild('search')
  public searchElementRef: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private http: HttpClient, private router: Router) {  }



  public ObtenerDatos(event) {

    let fileList: FileList = event.target[4].files; /* se encuentra en la posicion 4 del form OJO*/

    if (fileList.length > 0) {

      let file: File = fileList[0];

      let formData: FormData = new FormData();

      formData.append("document", file, file.name);

      let json = JSON.stringify({

        nombre: this._nombre,
        documento: file.name,
        usuario: this._usuario,
        correo: this._correo,
        password: this._password,
        latitud: this._lat,
        longitud: this._lng,
        idEstatus: 3,   //empiezan como PENDIENTES POR REVISAR
        idTipoUsuario: 2

      });
        
      this.http.post<any>("api/CentrosAcopio/InsertarCentros", JSON.parse(json)).subscribe(result => {

        console.log(result);

        if (result == 1) {

          console.log("Todo bien registro! ok");

          
          this.http.post("api/CentrosAcopio/GuardarDocumento", formData).subscribe(() => {


          });
          


        } else {

          console.log("Campos repetidos");

        }


      });



    }

  }



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

    iconUrl: "http://maps.google.com/mapfiles/ms/micons/red-pushpin.png",
    iconHeigh: 100
  }



}


interface marker {

  lat: number;
  lng: number;

}


interface datas { }

/*


  
  public _usuario: string;
  public _password: string;

  public _nombre: string;
  public _correo: string;

  public _imagen: string;
  public _direccion: string;

  public title: string = "CENTRO";
  public _lat: DoubleRange;
  public _lng: DoubleRange;

  public markers: marker[] = [];


  constructor(private http: HttpClient, private router: Router) { }

  ObtenerDatos() {

    let json = JSON.stringify({

      nombre: this._nombre,
      imagen: this._imagen,
      usuario: this._usuario,
      correo: this._correo,
      password: this._password,
      latitud: this._lat,
      longitud: this._lng,
      idEstatus: 3,     porque comienzan como pendientes 
      idTipoUsuario: 2

    });


    this.http.post("api/CentrosAcopio/InsertarCentros", JSON.parse(json)).subscribe(() => { });

  }

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
    this._lat = 0.0;
    this._lng = 0.0;

  }



  public login() {
    this.router.navigate(["/Login"]);
  }


}



interface marker {

  lat: number;
  lng: number;

}
*/
