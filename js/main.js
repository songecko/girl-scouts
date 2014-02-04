function makeNewPosition(container) 
{
    // Get viewport dimensions (remove the dimension of the div)
    container = (container || $(window));
    var h = container.height() - 50;
    var w = container.width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];
}

function animateCookie(cookie) 
{
    var target = cookie;
    var newq = makeNewPosition(target.parent());
    var oldq = target.offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    cookie.animate({
        top: newq[0],
        left: newq[1]
    }, speed, function() {
        animateCookie(cookie);
    });

};

function calcSpeed(prev, next) 
{
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.03;

    var speed = Math.ceil(greatest / speedModifier);

    return speed;
}

    
    
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
	
	var unslider = $('#carouselMetas').unslider({
		delay: false,              //  The delay between slide animations (in milliseconds)
	});
	$('.metas .unslider-arrow').click(function() {
        var fn = $(this).data('slide');
        
        //  Either do unslider.data('unslider').next() or .prev() depending on the className
        unslider.data('unslider')[fn]();
    });
	
	var nivelesUnslider = $('#carouselNiveles').unslider({
		delay: false,              //  The delay between slide animations (in milliseconds)
	});
	$('.niveles .unslider-arrow').click(function() {
        var fn = $(this).data('slide');
        
        //  Either do unslider.data('unslider').next() or .prev() depending on the className
        nivelesUnslider.data('unslider')[fn]();
    });
	
	$('.carousel').on('slide.bs.carousel', function () {
		$('#Navegacion').hide();
	});
		
	$('.carousel').on('slid.bs.carousel', function () {
		if($('.carousel .active').index('.carousel .item') == 0)
		{
			$('#Navegacion').show();
		}
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
	if($(".mapa").get(0))
	{
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
	}
	
	//Cookies
	animateCookie($('#cookie1'));
	animateCookie($('#cookie2'));
	animateCookie($('#cookie3'));
	animateCookie($('#cookie4'));
	animateCookie($('#cookie5'));
	animateCookie($('#cookie6'));
});