$(document).ready(function() {
    $('.modulo1').mouseenter(function() {
        $('.modulo1').fadeTo('fast', 0.5);
        
        });
    $('.modulo1').mouseleave(function() {
        $('.modulo1').fadeTo('fast', 1);
        });
        /* modulo 2*/
    $('.modulo2').mouseenter(function() {
        $('.modulo2').fadeTo('fast', 0.5);
        });
    $('.modulo2').mouseleave(function() {
        $('.modulo2').fadeTo('fast', 1);
        });
        /* modulo 3*/
    $('.modulo3').mouseenter(function() {
        $('.modulo3').fadeTo('fast', 0.5);
        });
    $('.modulo3').mouseleave(function() {
        $('.modulo3').fadeTo('fast', 1);
        });

        /* modulo 4*/
    $('.modulo4').mouseenter(function() {
        $('.modulo4').fadeTo('fast', 0.5);
        });
    $('.modulo4').mouseleave(function() {
        $('.modulo4').fadeTo('fast', 1);
        });
       
    $('div').mouseenter(function() {
    	$(this).animate({
           height: '+=10px'
       });
   });
   $('div').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       }); 
   });

        
});
