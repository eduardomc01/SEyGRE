
function faltanDatos() {

  if ($('#_busqueda').val().length === 0) {

    alertify.error("Faltan datos");

    return false;

  }


}

function faltanDatosComponentes() {

  if ($('#nombre').val().length === 0 || $('#peso').val().length === 0 || $('#clasificacion').val().length === 0 || $('#fecha').val().length === 0) {

    alertify.error("Faltan datos");

    return false;

  } else {

    alertify.success("Registro completo");

    document.getElementById("nombre").value = "";
    document.getElementById("peso").value = "";
    document.getElementById("clasificacion").value = "";
    document.getElementById("fecha").value = "";
    

  }

  


}
