$('.footer__title').click(function() {
	$(this).next('.footer__list').toggleClass('footer__list--open');
	$(this).children('.footer__switch').toggleClass('footer__switch--open');
});