function advertenciaLogin() {

  var txt = document.createElement("txt");
  txt.innerHTML = "Usted se encuentra accediendo al login del sistema, en caso de <b style='color:red;'> NO contar con un centro de acopio o algun evento de la recolección en Residuos electrónicos (RE) </b> deberia regresar a la vista ciudadana! ";


  swal({
    html: true,
    title: "Aviso",
    icon: "warning",
    button: true,
    content: txt,
    button: "Deacuerdo",
  });


}


function advertenciaEstadisticas() {

  var txt = document.createElement("txt");
  txt.innerHTML = "Usted se encuentra accediendo al modulo estadísticas, en caso de <b style='color:red;'> NO conocer un centro de acopio, en el modulo mapa puede identificarlos para su consulta en esta sección </b> Gracias por su atención! ";


  swal({
    html: true,
    title: "Aviso",
    icon: "warning",
    button: true,
    content: txt,
    button: "Deacuerdo",
  });


}




function advertenciaRegistro() {

  if (this.faltanDatosAgregarCentro() == 1) {


    var txt = document.createElement("txt");
    txt.innerHTML = "Gracias por aplicar y ser tomado en cuenta como un centro de acopio en residuos electrónicos (RE) <b style='color:red;'> Se le enviará un correo cuando tu(s) documento(s) hayan sido revisados por la institución.</b> ";


    swal({
      html: true,
      title: "Aviso",
      icon: "success",
      button: true,
      content: txt,
      button: "Deacuerdo",
    });


    /*window.location.replace("/Login");*/

  } else {


  }

}




function advertenciaActualizarDatosCentro() {

  if (this.faltanDatosActualizarCentro() == 1) {


    var txt = document.createElement("txt");
    txt.innerHTML = "Sus datos estan siendo actualizados <b style='color:red;'> Espere un momento porfavor </b> ";


    swal({
      html: true,
      title: "Aviso",
      icon: "success",
      button: true,
      content: txt
    });


    //window.location.replace("/users");

  } else {


  }

}


