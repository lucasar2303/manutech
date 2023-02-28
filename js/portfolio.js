$(document).ready(function(){
	$('.lista').click(function(){
		const value = $(this).attr('data-filter');
		if (value == 'todos'){
			$('.itemBox').show('1000');
		}
		else{
			$('.itemBox').not('.'+value).hide('1000');
			$('.itemBox').filter('.'+value).show('1000');
		}
	})
		$('.lista').click(function(){
			$(this).addClass('activePortfolio').siblings().removeClass('activePortfolio');
	})

	;

})