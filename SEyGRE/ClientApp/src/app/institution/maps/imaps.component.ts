import { Component, OnInit, ViewChild, NgZone, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-imaps',
  templateUrl: './imaps.component.html',
  styleUrls: ['./imaps.component.css'],
  providers: [NgbAlertConfig]
})
export class IMapsComponent implements OnInit {


  latitude: number;
  longitude: number;
  address: string;
  public d: datas[];
  private geoCoder;

  animacion: any;

  @ViewChild('search')
  public searchElementRef: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private http: HttpClient, private router: Router) {

    if (sessionStorage.getItem("idUser") == null)
      this.router.navigate(["/Login"]);

    this.http.get<datas[]>("api/CentrosAcopio/ObtenerUbicacionCentros").subscribe(result => {

      console.log(result);

      this.d = result;

    });

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

  public mapaListo(): void {
    this.animacion = "BOUNCE";
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



  iconMap = {

    iconUrl: "http://maps.google.com/mapfiles/ms/micons/recycle.png",
    iconHeigh: 100
  }


  iconMapCurrent = {

    iconUrl: "http://maps.google.com/mapfiles/ms/micons/red-pushpin.png",
    iconHeigh: 100
  }

  iconMapEvent = {

    iconUrl: "http://maps.google.com/mapfiles/ms/micons/grn-pushpin.png",
    iconHeigh: 100
  }


}


interface datas { }



