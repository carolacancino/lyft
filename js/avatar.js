$('#cambiarAvatar').on('change', function(evento){
	// primero recuperamos el archivo subido
	var archivo = $(this)[0].files[0];

	// creamos un FileReader
	// FileReader es un objeto de JS para leer archivos
	var reader = new FileReader();

	// le decimos al filereader qué hacer cuando termine de cargar
	reader.onload = function(efr) {
		$('#avatar img').attr('src', efr.target.result);
	}
	// sólo queda cargar la imagen
	reader.readAsDataURL(archivo);
});

$('form').on('submit', function(es){
	// primero evitamos que se envie el formulario
	es.preventDefault();

	// pescamos archivo de la imagen
	var archivo = $('#cambiarAvatar')[0].files[0];

	// creamos FileReader
	var reader = new FileReader();

	// le decimos al filereader que hacer cuando termine de cargar
	reader.onloadend = function(efr) {
		var datos_imagen = reader.result;
		// se guarda imagen en localStorage
		localStorage.setItem('avatar_data', datos_imagen);
		alert('Imagen de guardada satisfactoreamente');
	}

	// finalmente leemos la imagen
	reader.readAsDataURL(archivo);
});

// queda que al carga la página. recuperar imagen del localStorage
$(document).ready(function(){
	// aca va el codigo que se ejecuta al cargar la página

	// primero recuperamos datos del localStorage
	var avatar_data = localStorage.getItem('avatar_data');

	// cambiamos la foto por defecto
	if(avatar_data) {
		$('#avatar img').attr('src', avatar_data);
	}
});


