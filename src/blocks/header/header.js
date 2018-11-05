$('.js-header__switch').click(function() {
	$('.header__switch').toggleClass('header__switch--open');
	$('.header__inner').toggleClass('header__inner--open');
});

$('.header__nav-item a').click(function() {
   $('.header__switch').removeClass('header__switch--open');
   $('.header__inner').removeClass('header__inner--open');
});

if($('.header').hasClass("header--empty")) {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.header').removeClass("header--empty");
		} else {
			$('.header').addClass("header--empty");
			
		}
	})
}
 
	
