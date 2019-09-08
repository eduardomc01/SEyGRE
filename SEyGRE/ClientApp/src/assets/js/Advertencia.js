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
    txt.innerHTML = "Gracias por aplicar y ser tomado en cuenta como un centro de acopio en Residuos electrónicos (RE) <b style='color:red;'> Se le enviara un correo cuando tu documento(s) hayan sido revisados por la institución y verficado su validez </b> ";


    swal({
      html: true,
      title: "Aviso",
      icon: "success",
      button: true,
      content: txt,
      button: "Deacuerdo",
    });


    window.location.replace("/Login");

  } else {


  }

}


function faltanDatosAgregarCentro() {

  if ($('#nombre').val().length === 0 || $('#usuario').val().length === 0 || $('#correo').val().length === 0 || $('#file').val().length === 0 || $('#pass').val().length === 0 || $('#lat').val().length === 0 || $('#long').val().length === 0) {

    alertify.error("Faltan datos");

    return 0;

  } else {

    alertify.success("Registro completo");

    return 1;
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
      content: txt,
      button: "Deacuerdo",
    });


    window.location.replace("/users");

  } else {


  }

}


function faltanDatosActualizarCentro() {

  if ($('#file').val().length === 0 || $('#nombre').val().length === 0 || $('#password').val().length === 0) {

    alertify.error("Faltan datos");

    return 0;

  } else {

    alertify.success("Registro completo");

    return 1;
  }

}
