import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-center',
  templateUrl: './verify-center.component.html',
  styleUrls: ['./verify-center.component.css'],
  providers: [NgbAlertConfig]
})
export class VerifyCenterComponent{


  public showSuccess: boolean;
  public showDanger: boolean;
  public staticAlertClosed;

  public _centro: centro[]
  public _centro2: any

  paginaPrincipal: number = 1;

  rutaImagenD: string = "/assets/image/sin-foto.jpg";
  ruta: string = "/assets/doc/";
  ruta2: string = "/assets/profile/";

  showDefault: boolean;
  show: boolean;

  constructor(private http: HttpClient, private router: Router) {

    if (sessionStorage.getItem("idUser") == null)
      this.router.navigate(["/Login"]);

    this.obtenerPeticiones();

  }



  public obtenerPeticiones(): void {

    this.http.get<any>("api/CentrosAcopio/ObtenerCentrosPendientes").subscribe(result => {

      this._centro = result;


      this.http.get<any>("api/Institucion/ObtenerCentrosHabDes").subscribe(result => {
      
          this._centro2 = result;

       // this.mensajesAlerts(result.length);

      });


      //  this.mensajesAlerts(result.length);

    });

  }


  habilitarDeshabilitar(_id: number, _estatus: number) {

    let json = JSON.stringify({ id: _id, idEstatus: _estatus });

    this.http.post<any>('api/Institucion/HabilitarDeshabilitar', JSON.parse(json)).subscribe(() => {

      this.obtenerPeticiones();

    });


  }



  public respaldo():void {

    this.http.get('api/Seguridad/BackupBaseDatos').subscribe(result => {

      console.log(result);

    });

  }


  public seleccionarCentro(id: number, op: boolean) {

    if (op) {

      this.http.post("api/CentrosAcopio/AceptarPeticionCentro", id).subscribe(() => {

        this.obtenerPeticiones();

      });
      
    } else {

    

      this.http.post("api/CentrosAcopio/EliminarPeticionCentro", id).subscribe(() => {

        this.obtenerPeticiones();

      });

    }

  }


  public mensajesAlerts(op: number) {

    this.staticAlertClosed = false;

    if (op >= 1) {

      this.showSuccess = true;

    } else {

      this.showDanger = true;

    }

  }


  public close() {

    this.staticAlertClosed = true;
    this.showSuccess = false;
    this.showDanger = false;

  }

  

}


interface centro {
  a: number;
  b: string;
  c: string;
  d: string;
  e: string;
  f: string;
  g: string;


}
