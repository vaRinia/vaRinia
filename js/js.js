$(document).ready(function(){
    $(".boton").click(function(){
        var section = $(this).data("section");
        var position = $("body").scrollTop();
        $("body").animate({
           scrollTop: $(section).offset().top - 80
            }, 1300);    
    });
    $(".botonc").click(function(){
        var section = $(this).data("section");
        var position = $("body").scrollTop();
        $("body").animate({
           scrollTop: $(section).offset().top - 45
            }, 1300);    
    });
    /*$("#logo").hover(function(){
    	console.log("listo1");
    	$(".navbar-brand").html("<img alt='Logo vaRi_' src='img/logoNav2.png' class='img-responsive'>")}, function() {
    		console.log("listo2");
    		$(".navbar-brand").html("<img alt='logo' src='img/logoNav.png' class='img-responsive'>");
    });*/
    $("#logo").click(function(){
        $("body").animate({
           scrollTop: $("#inicio").offset().top - 150
            }, 1500);    
        
    });
});
