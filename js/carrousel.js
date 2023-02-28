const carrousel = document.querySelector('.js-carrousel');

new Glider(carrousel, {
	slidesToShow: 2,
	slidesToScroll: 1,
	draggable: true,
	dots: ".js-carrousel-dots",
	arrows: {
		prev: ".js-carrousel-prev",
		next: ".js-carrousel-next",
	},
	scrollLock: true,
	responsive: [
	{
		breakpoint: 600,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
		}
	},
	{
		breakpoint: 900,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 3,


	}}]
});