/*
function faltanDatos() {

  if ($('#_busqueda').val().length === 0) {

    alertify.error("Faltan datos");

    return false;

  }


}
*/

function faltanDatosComponentes() {

  if ($('#nombre').val().length === 0 || $('#peso').val().length === 0 || $('#clasificacion').val().length === 0 || $('#fecha').val().length === 0) {

    alertify.error("Faltan datos");

    return false;

  } else {

    alertify.success("Registro completo");

    /*
    document.getElementById("nombre").value = "";
    document.getElementById("peso").value = "";
    document.getElementById("clasificacion").value = "";
    document.getElementById("fecha").value = "";
    */

  }

}


function faltanDatosPersonal() {

  if ($('#nombre').val().length === 0 || $('#apellidos').val().length === 0 || $('#edad').val().length === 0 || $('#direccion').val().length === 0 || $('#cargo').val().length === 0) {

    alertify.error("Faltan datos");

    return false;

  } else {

    alertify.success("Registro completo");

    /*
    document.getElementById("nombre").value = "";
    document.getElementById("peso").value = "";
    document.getElementById("clasificacion").value = "";
    document.getElementById("fecha").value = "";
    */

  }

}


function faltanDatosAgregarCentro() {

  if ($('#nombre').val().length === 0 || $('#usuario').val().length === 0 || $('#correo').val().length === 0 || $('#file').val().length === 0 || $('#pass').val().length === 0 || $('#lat').val().length === 0 || $('#long').val().length === 0) {

      alertify.error("Faltan datos");

      return false;

    } else {

      alertify.success("Registro completo");

    /*
      document.getElementById("nombre").value = "";
      document.getElementById("usuario").value = "";
      document.getElementById("correo").value = "";
      document.getElementById("file").value = null;
      document.getElementById("pass").value = "";
      document.getElementById("lat").value = null;
      document.getElementById("long").value = null;
      */
    }

  }




function eliminarRegistro() {

  alertify.error("Registro eliminado");

}


function aceptarRegistro() {

  alertify.success("Registro aceptado");

}
