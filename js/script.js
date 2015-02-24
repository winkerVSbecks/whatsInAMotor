$(document).ready(function(){

	$('.slides').slides({
		preload: true,
		preloadImage: 'img/loading.gif',
		play: 0,
		pause: 2500,
		hoverPause: true
	});

	$('.nav a').click(function(e){
		$.scrollTo( this.hash || 0, 500);
		e.preventDefault();
	});


	$('.title a').click(function(e){
		$.scrollTo( this.hash || 0, 500);
		e.preventDefault();
	});

});