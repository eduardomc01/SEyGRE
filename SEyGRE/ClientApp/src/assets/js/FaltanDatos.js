

function faltanDatosComponentes() {

  if ($('#nombre').val().length === 0 || $('#peso').val().length === 0 || $('#clasificacion').val().length === 0 || $('#fecha').val().length === 0) {

    alertify.error("Faltan datos");

    return false;

  } else {

    alertify.success("Registro completo");


  }

}


function faltanDatosPersonal() {

  if ($('#nombre').val().length === 0 || $('#apellidos').val().length === 0 || $('#edad').val().length === 0 || $('#direccion').val().length === 0 || $('#cargo').val().length === 0) {

    alertify.error("Faltan datos");

    return false;

  } else {

    alertify.success("Registro completo");


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



function faltanDatosAgregarEvento() {

  if ($('#nombre').val().length === 0 || $('#organizador').val().length === 0 || $('#fecha').val().length === 0 || $('#horaI').val().length === 0 || $('#horaF').val().length === 0 || $('#tel').val().length === 0 || $('#lat').val().length === 0 || $('#long').val().length === 0) {

    alertify.error("Faltan datos");

    return false;

  } else {

    alertify.success("Registro completo");

  }

}




function faltanDatosNoticias() {

  if ($('#nombre').val().length === 0 || $('#imagenUrl').val().length === 0 || $('#noticiaUrl').val().length === 0 || $('#descripccion').val().length === 0) {

    alertify.error("Faltan datos");

    return false;

  } else {

    alertify.success("Registro completo");

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














function eliminarRegistro() {

  alertify.error("Registro eliminado");

}


function aceptarRegistro() {

  alertify.success("Registro aceptado");

}


function habilitarCentro() {

  alertify.success("Centro habilitado");

}


function deshabilitarCentro() {

  alertify.error("Centro deshabilitado");

}

function actualizarRegistro() {

  alertify.success("Datos actualizados");

}

