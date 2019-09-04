function confirmarDatos() {

  var txt = document.createElement("txt");
  txt.innerHTML = " Actualizando registro <b> Espere un momento porfavor </b> ";

  swal({
    title: "Aviso",
    icon: "success",
    content: txt,
    buttons: false,
    
  });

      this.location.reload();     


}

  /*
  if (confirm("¿Datos correctos?")) {
    swal({
      title: "Aviso",
      icon: "success",
      content: txt,
      buttons: false,
    });

    location.reload()

  } else {

    swal({
      title: "Aviso",
      icon: "error",
      text: "Cancelado!",
      buttons: false,
    });

    return false

  }
 
  

}
*/
