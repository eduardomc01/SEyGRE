function confirmarDatos() {

  if (confirm("¿Datos correctos?")) {
    swal({
      title: "Aviso",
      icon: "success",
      text: "Agregando datos!",
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
