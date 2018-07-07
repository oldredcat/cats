$(function(){
	
	$('.item').on('click', function(e){
		e.preventDefault();
		
		if(!$(this).hasClass('disabled')){
			$(this).addClass('visited').toggleClass('selected');
		}

	});
});