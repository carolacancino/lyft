function validateForm(){
    
    var letrasnormales = /^[A-Za-z\_\-\.\s\xF1\xD1]+$/;

    function Nombre(){
        
        var Nombre =$("#name").val();
        if(Nombre == null || Nombre.length == 0 || /^\s+$/.test(Nombre)) {
            var mensaje = "Ingrese su nombre";
            var span = $("#name").parent().append("<span>" + mensaje + "</span>");
        }

       else if(!letrasnormales.test(Nombre)){
            var mensaje = "Ingrese solo letras";
            var span = $("#name").parent().append("<span>" + mensaje + "</span>");
        } 
        else if (Nombre.charAt(0) != Nombre.charAt(0).toUpperCase()) {
            var mensaje = "Debe comenzar con mayusculas";
            var span = $("#name").parent().append("<span>" + mensaje + "</span>");
        }
        
    }
    Nombre();