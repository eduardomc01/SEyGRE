import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [NgbAlertConfig]
})

export class ProfileComponent {

  public fotoDefault: boolean = true;
  public perfil: string = "image/sin-foto.png";

  //public _centro: centro[];
  
  private idUser: string = sessionStorage.getItem("idUser");
  
  constructor(private http: HttpClient, private router: Router) {

    if (this.idUser == null)
      this.router.navigate(["/Login"]);

    
    this.http.get<any>("api/CentrosAcopio/ObtenerCentro?id=" + this.idUser).subscribe(result => {

      this._centro = result;

      this.perfil = "imagenesPerfiles/" + this.idUser + "/" + result[0].imagen;
      

    });
    

  }


  public ObtenerImagen(event) {
    
    var fileList: FileList = event.target.files;

    if (fileList.length > 0) {

      let _file: File = fileList[0];
      
      let formData: FormData = new FormData();

      formData.append("i", _file, _file.name);

      this.http.post("api/CentrosAcopio/GuardarImagenes?id=" + this.idUser, formData).subscribe(result => {

      });

    }

  }


}



/*
interface centro {

  a: number;
  b: string;
  c: string;
  imagen: string;

}


public SeleccionImagen(event) {

    this.imagenSeleccionada = <File>event.target.files[0];

  }

    
  public CargarImagen() {

    let json = JSON.stringify({ Id: this.idUser, NombreArchivo: this.imagenSeleccionada.name, File: this.imagenSeleccionada });

    

    this.http.post("api/CentrosAcopio/GuardarImagenes", JSON.parse(json)).subscribe(result => {

      this.prueba = result[0];

  });


 
    let json = JSON.stringify({ Id: this.idUser, NombreArchivo: files[0].name, _File: files });

    files.

    const formdata = new FormData();

    formdata.append("image", files, files.name);

    this.http.post("api/CentrosAcopio/GuardarImagenes", formdata).subscribe(result => {

      this.prueba = result[0];

    });

   // console.log(formdata));

    this.reader.readAsDataURL(files[0]);    

    this.reader.onload = (Event) => { this.imgURL = this.reader.result; }


*/
