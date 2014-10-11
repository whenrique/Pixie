$(document).ready(function($){
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
		var s = $(window).scrollTop();
		$('html, body').animate({
			// scrollTop: s + h
			scrollTop: a.offset().top
		}, 800);
	});

});
