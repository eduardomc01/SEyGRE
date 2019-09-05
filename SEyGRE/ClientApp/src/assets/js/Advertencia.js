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
