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
	
	$('section').first().show();
	
	$('#Navegacion li a').click(function(e)
	{
		e.preventDefault();
		
		var sectionId = $(this).data('section');
	    //if(!$(this).hasClass('locked') && !jQuery(this).hasClass('ativo')){
		/*var titulo_seletor = replaceAll($(this).text(),' ','-');
			window.location.replace('#'+titulo_seletor);*/
			//alert(jQuery(this).index());
		  //var i_d = jQuery(this).index();
		 
	      //var i_a = jQuery('.homepage .seletores li.ativo').index();
	      
	      //console.info(i_d,i_a);
	      
	      
	      //jQuery('.homepage .destaques .secao .box-content').hide();
	      
	      /*jQuery('.navigation .open-menu').removeClass('ativo').find('a').removeClass('on').addClass('.off').unbind('click');
	      jQuery('.menu').fadeOut('fast');
	      menu();
	      jQuery('.homepage .seletores li').addClass('locked');
	      jQuery('.homepage .seletores li.ativo').removeClass('ativo').find('a').fadeOut();
	      jQuery(this).addClass('ativo').find('a').fadeIn('slow');*/
	      
	      //var h_move = jQuery('.homepage .destaques li').height();
	      //var mover = h_move * jQuery(this).index();
	      
	      $('<div class="color">\
	                <ul>\
	                  <li></li>\
	                  <li></li>\
	                  <li></li>\
	                </ul>\
	                </div>').appendTo('body');
	      
	      
	      //if(i_d > i_a){ 
	        
	      	$('section.active').removeClass('active').hide();
	      	
	        $('.color li:eq(0)').css('background-color','#a0008a');
	        $('.color li:eq(1)').css('background-color','#11ab9e');
	        $('.color li:eq(2)').css('background-color','#ffa800');
	        $('.color li:eq(0)').animate({marginTop:'-50px'}, 250,function(){
	          $('.color li:eq(1)').animate({marginTop:'-50px'}, 250,function(){
	            $('.color').fadeOut('fast',function(){
	              $('.color').remove();
	              $('section#'+sectionId).show();
	              $('section#'+sectionId).addClass('active');
	            });
	          });
	        });
	        /*jQuery('.homepage .destaques').animate({top:-mover},1000,function(){
	          jQuery('.homepage .destaques .secao:eq('+i_d+')').find('.box-content').fadeIn();
	          jQuery('.homepage .seletores li').removeClass('locked');
	          jQuery('.homepage .destaques .transitional').remove();
	        });*/
	        
	      /*}else{
	        jQuery('.color li:eq(2)').css({'background-color':'#ffa800','margin-top':-h_move});
	        jQuery('.color li:eq(1)').css({'background-color':'#11ab9e','margin-top':-h_move});
	        jQuery('.color li:eq(0)').css({'background-color':'#a0008a'})
			/* //,'margin-top':-h_move; 
	        jQuery('.color li:eq(1)').animate({marginTop:h_move},250,function(){
	          jQuery('.color li:eq(0)').animate({marginTop:h_move},250,function(){
	            jQuery('.color').fadeOut('normal',function(){
	              jQuery('.color').remove();
	            });
	          })
	        })
	        jQuery('.homepage .destaques').animate({top:-mover},1000,function(){
	          jQuery('.homepage .destaques .secao:eq('+i_d+')').find('.box-content').fadeIn();
	          jQuery('.homepage .seletores li').removeClass('locked');
	          jQuery('.homepage .destaques .transitional').remove();
	        });
	       */	        
	});
	//Cookies
	animateCookie($('#cookie1'));
	animateCookie($('#cookie2'));
	animateCookie($('#cookie3'));
	animateCookie($('#cookie4'));
	animateCookie($('#cookie5'));
	animateCookie($('#cookie6'));
});