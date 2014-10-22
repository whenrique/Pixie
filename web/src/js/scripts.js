(function($){
		$('.menu a').on('click', function(e){
		e.preventDefault();
		var href = $(this).attr('href');

		$('body > section').each(function(){
			var id = $(this).attr('id');

			if (href == id) {
				$('html, body').animate({
	                scrollTop: jQuery('#'+id).offset().top
	            }, 800);
			}
		});
	});
		
	$('header .pixie').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 800);
	});
	
	$('.arrow').on('click', function(){
		var a = $(this).parent().next();
		$('html, body').animate({
			scrollTop: a.offset().top
		}, 800);
	});

	//animate pixies
	new WOW().init();
	proposta();
	descubra();

	var h = $(window).height(),
		flag = false;
		dflt 	= ['flipOutY', 'flipOutX', 'zoomOut', 'flipOutX', 'rotateOutUpLeft', 'zoomOut'],
		effect 	= ['bounceInDown', 'flipInX', 'zoomIn', 'flipInX', 'bounceInUp', 'zoomIn'];
	function proposta(){
		var pixie 	= $('#proposta .wow');

		$(window).scroll(function(){
			$(pixie).each(function(id){
				var s = $(window).scrollTop();

				if(s != h) {
					$(this).css({'-webkit-animation-name': dflt[id]});
				} else {
					$(this).css({'-webkit-animation-name': effect[id], 'visibility': 'visible'});
				}
			});
		});
	}

	function descubra(){
		var pixie 	= $('#descubra .wow');

		$(window).scroll(function(){
			$(pixie).each(function(id){
				var s = $(window).scrollTop();

				if(s != h * 2) {
					$(this).css({'-webkit-animation-name': dflt[id]});
				} else {
					$(this).css({'-webkit-animation-name': effect[id], 'visibility': 'visible'});
				}
			});
		});
	}

  	function disable_scroll() {
		if (window.addEventListener) {
		    window.addEventListener('DOMMouseScroll', wheel, false);
		}
		window.onmousewheel = document.onmousewheel = wheel;
	}

	function enable_scroll() {
	  	if (window.removeEventListener) {
	    	window.removeEventListener('DOMMouseScroll', wheel, false);
		}
		window.onmousewheel = document.onmousewheel = document.onkeydown = null;  
	}
})(jQuery);
