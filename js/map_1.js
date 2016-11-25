/*telefono*/
$(document).ready(function () {

    $('.num').click(function () {
        var num = $(this);
        var text = $.trim(num.find('.txt').clone().children().remove().end().text());
        var telNumber = $('#telNumber');
        $(telNumber).val(telNumber.val() + text);
    });

});
/*menu*/
$(document).ready(main);

var contador = 1;
function main(){
  $('.menu_bar').click(function(){
  		//$('nav').toggle();
  		if(contador == 1){
  			$('nav').animate({
  				left:'0'
  			});
  			contador = 0;
  		}else{
  			contador = 1;
  			$('nav').animate({
  				left:'-100%'
  			});
  		}
  		
  		
  });
}