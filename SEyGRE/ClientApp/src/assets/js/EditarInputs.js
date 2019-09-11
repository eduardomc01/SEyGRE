
function editarPersonal(id) {
  
  $("#Nombre" + id).prop('disabled', false);
  $("#Apellidos" + id).prop('disabled', false);
  $("#Edad" + id).prop('disabled', false);
  $("#Direccion" + id).prop('disabled', false);
  $("#Cargo" + id).prop('disabled', false);

}


function editarComponente(id) {

  $("#Nombre" + id).prop('disabled', false);
  $("#Peso" + id).prop('disabled', false);
  $("#Clasificacion" + id).prop('disabled', false);
  $("#Fecha" + id).prop('disabled', false);

}

function editarEvento(id) {

  $("#Nombre" + id).prop('disabled', false);
  $("#Organizador" + id).prop('disabled', false);
  $("#Horario" + id).prop('disabled', false);
  $("#Fecha" + id).prop('disabled', false);
  $("#Estatus" + id).prop('disabled', false);
}



function editarNoticia(id) {

  $("#Nombre" + id).prop('disabled', false);
  $("#Imagen" + id).prop('disabled', false);
  $("#Noticia" + id).prop('disabled', false);
  $("#Descripccion" + id).prop('disabled', false);
}




/*
$("input").prop('disabled', true);
$("input").prop('disabled', false);
*/
