var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
       
        $(document).ready(function(){
            
            $("#next").click(function(){
                
                var nombre = $("#name").val();
                var correo = $("#email").val();
 
                
                if(nombre == ""){
                    $("#alert1").fadeIn("slow");
                    return false;
                }

                else{
                    $("#alert1").fadeOut();
 
                    if(correo == "" || !expr.test(correo)){
                        $("#alert2").fadeIn("slow");
                        return false;
                    }
                    else{
                        $("#alert2").fadeOut();
 
                    }
                }
 
            });
        });