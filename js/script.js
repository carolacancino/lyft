$(document).ready(function() {
	$('select').material_select();
});
//validacion telefono numeros
$('#formulario').submit(function () {  
    if($('#chile').val().length < 9) {  
        alert("El teléfono debe tener 9 caracteres. Ej. 666112233");  
        return false;  
    }  
    return false;  
});  