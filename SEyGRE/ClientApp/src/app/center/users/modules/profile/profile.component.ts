import { Component, OnInit, Query } from '@angular/core';
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

  _imagen: string[];
  _centro: centro[];

  idUser: string = sessionStorage.getItem("idUser");
  show: boolean;

  constructor(private http: HttpClient, private router: Router) {

    if (this.idUser == null)
      this.router.navigate(["/Login"]);

    this.ObtenerFoto();

  }

  
  public ObtenerFoto() {


    this.http.get<centro[]>("api/CentrosAcopio/ObtenerPerfil?id=" + this.idUser).subscribe(result => {

/*
      if (result[0].imagen == "") {

        this.show = true;

      } else {

        this.show = false;

      }
            */

      this._centro = result;


    });


  }




  public ObtenerImagen(event) {

    let fileList: FileList = event.target[0].files;

    if (fileList.length > 0) {

      let _file: File = fileList[0];
      
      let formData: FormData = new FormData();

      formData.append("file", _file, _file.name);


      this.http.post<centro[]>("api/CentrosAcopio/GuardarImagenes?id=" + this.idUser, formData).subscribe(result => { 

        console.log(result);

        //this.ObtenerFoto();


      });
    }


  }


}

//C:\Users\eduar\SEyGRE\SEyGRE\ClientApp\src\assets\imagenesPerfiles\2\re4.png


interface centro {

  id: number;
  nombre: string;
  password: string;
  imagen: string;

}

/*
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
