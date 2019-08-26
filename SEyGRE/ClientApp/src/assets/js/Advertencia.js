function advertenciaLogin() {

  var txt = document.createElement("txt");
  txt.innerHTML = "Usted se encuentra accediendo al login del sistema, en caso de <b style='color:red;'> NO contar con un centro de acopio o algun evento de la recolección de RE </b> deberia regresar a la vista ciudadana! ";


  swal({
    html: true,
    title: "Aviso",
    icon: "warning",
    button: true,
    content: txt,
    button: "He leído",
  });


}
