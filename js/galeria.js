console.log("alo")

$(".itemBox").magnificPopup({
	delegate: 'a',
	type: 'image',
	gallery:{
		enabled: true
	}
})

$('.lista').click(function(){
	$(this).addClass('activePortfolio').siblings().removeClass('activePortfolio');
})

;

