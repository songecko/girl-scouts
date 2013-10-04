$(document).ready(function()
{
	$(".navegacionLateral li").hover(
		function () 
		{
			$(this).addClass("mostrar");
	  	},
		function () 
		{
			$(this).removeClass("mostrar");
		}
	);
	
	// Voluntarios
	$(".voluntariosMenu li a").hover(
		function () 
		{
			$(this).addClass("active");
	  	},
		function () 
		{
	  		if(!$(this).hasClass("selected")){
	  			$(this).removeClass("active");		  			
	  		}
		}
	);
	
	$(".voluntariosMenu li a").click(function(e)
	{
	
		$(".voluntariosMenu li a.selected").removeClass("selected");
		$(".voluntariosMenu li a.active").removeClass("active");
		$(this).addClass("active selected");

		var box = $(this).data("box");
		$(".boxPDF").hide();
		$("#"+box).show();
		
		e.preventDefault();
	});
	
	// Promesa y Ley
	$(".promesaLeyMenu li a").hover(
		function () 
		{
			$(this).addClass("active");
		},
		function () 
		{
	 		if(!$(this).hasClass("selected")){
	  			$(this).removeClass("active");		  			
	  		}
		}
	);
		
	$(".promesaLeyMenu li a").click(function(e)
	{
		$(".promesaLeyMenu li a.selected").removeClass("selected");
		$(".promesaLeyMenu li a.active").removeClass("active");
		$(this).addClass("active selected");

		var box = $(this).data("box");
		$(".promesaLeyBox").hide();
		$("#"+box).show();
			
		e.preventDefault();
	});
		
	//Programa
	$(".programaPopMenu li a").click(function(e)
	{	
		var pop = $(this).data("pop");
		$("#"+pop).modal();
				
		e.preventDefault();
	});
	
	//Contact
	$(".form-contacto form").submit(function(e)
	{
		$("#message").show();
		
		e.preventDefault();
	});
	
	//Map
	var mapOptions = {
		center: new google.maps.LatLng(18.456041,-66.078579),
		zoom: 16,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		disableDefaultUI: true
	};
	var map = new google.maps.Map($(".mapa").get(0), mapOptions);
	
	var marker = new google.maps.Marker({
	      position: new google.maps.LatLng(18.454107,-66.078794),
	      map: map,
	      title:"Hello World!"
	});	
});