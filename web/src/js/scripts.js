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

	var pixillax = document.querySelector('.pixillax'),
		parallax = new Parallax(pixillax);

	$('.pixie-drag li > img').draggable({
		snap: '.pixie-drag li',
		snapMode: 'inner',
		revert: 'invalid'
	});
	$('.pixie-drag li').droppable({
		tolerance: 'pointer',
		drop: function(e, ui){
			$(this).addClass('not-empty');
			$(this).droppable('disable');
		},
		out: function(e, ui){
			$('.pixie-drag li').droppable('enable');
			$(this).removeClass('not-empty');
		},
		activate: function(e, ui){
			$('.pixie-drag li').each(function(){
				if ($(this).hasClass('not-empty')){
					$(this).droppable('disable');
				} else {
					$(this).droppable('enable');
					$(this).removeClass('not-empty');
				}
			});
		}
	});

	$('.owl-carousel').owlCarousel({
		singleItem: true,
		slideSpeed : 300,
		paginationSpeed : 400,
		autoPlay: true,
		navigation : true,
		navigationText: ['<span class="arrow-h auto ar-l sprite"></span>','<span class="arrow-h auto ar-r sprite"></span>']
	});

})(jQuery);
