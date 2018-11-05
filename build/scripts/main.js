$('.js-input-tel').inputmask({
	"mask": "+7 (999) 999-99-99"
});

new WOW().init();



$('.footer__title').click(function() {
	$(this).next('.footer__list').toggleClass('footer__list--open');
	$(this).children('.footer__switch').toggleClass('footer__switch--open');
});

$('.form input[type="checkbox"]').on('change', function(){
  if($(this).prop('checked')){
 $('.form .btn').attr('disabled', false);
  }else{
 $('.form .btn').attr('disabled', true);
  }
 });




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
 
	

var body = document.querySelector('body');
var modal = document.querySelector('.modal');
var trigger = document.querySelectorAll('.js-open-modal');
var closeButton = document.querySelector('.modal__close');

function toggleModal() {
	modal.classList.toggle('modal--opened');
	body.classList.toggle('scroll-hidden');
}

function windowOnClick(event) {
	if (event.target === modal) {
		toggleModal();
	}
}

for(var i = 0; i < trigger.length; i++) {
	trigger[i].onclick = toggleModal;
}

if (closeButton !== null) {
	closeButton.addEventListener('click', toggleModal);
}

window.addEventListener('click', windowOnClick);

$('.product-slider__for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.product-slider__nav'
});
$('.product-slider__nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.product-slider__for',
  dots: false,
  arrows: false,
  focusOnSelect: true,
  variableWidth: true
});


  $('.product-slider__for').magnificPopup({
    type: 'image',
    delegate: 'a',
    closeOnContentClick: true,
    mainClass: 'mfp-img-mobile',

    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    }
  });
$('.slider-img').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  nav: true,
  prevArrow: '<button class="slider-img__arrow slider-img__arrow--prev"></button>',
  nextArrow: '<button class="slider-img__arrow slider-img__arrow--next"></button>',
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJhZHZhbnRhZ2UvYWR2YW50YWdlLmpzIiwiZm9vdGVyL2Zvb3Rlci5qcyIsImZvcm0vZm9ybS5qcyIsImhlYWRlci9oZWFkZXIuanMiLCJtb2RhbC9tb2RhbC5qcyIsInByb2R1Y3Qtc2xpZGVyL3Byb2R1Y3Qtc2xpZGVyLmpzIiwic2xpZGVyLWltZy9zbGlkZXItaW1nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJCgnLmpzLWlucHV0LXRlbCcpLmlucHV0bWFzayh7XHJcblx0XCJtYXNrXCI6IFwiKzcgKDk5OSkgOTk5LTk5LTk5XCJcclxufSk7XHJcblxyXG5uZXcgV09XKCkuaW5pdCgpO1xyXG5cclxuIiwiIiwiJCgnLmZvb3Rlcl9fdGl0bGUnKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHQkKHRoaXMpLm5leHQoJy5mb290ZXJfX2xpc3QnKS50b2dnbGVDbGFzcygnZm9vdGVyX19saXN0LS1vcGVuJyk7XHJcblx0JCh0aGlzKS5jaGlsZHJlbignLmZvb3Rlcl9fc3dpdGNoJykudG9nZ2xlQ2xhc3MoJ2Zvb3Rlcl9fc3dpdGNoLS1vcGVuJyk7XHJcbn0pOyIsIlxyXG4kKCcuZm9ybSBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKXtcclxuICBpZigkKHRoaXMpLnByb3AoJ2NoZWNrZWQnKSl7XHJcbiAkKCcuZm9ybSAuYnRuJykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgfWVsc2V7XHJcbiAkKCcuZm9ybSAuYnRuJykuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcclxuICB9XHJcbiB9KTtcclxuXHJcblxyXG5cclxuIiwiJCgnLmpzLWhlYWRlcl9fc3dpdGNoJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0JCgnLmhlYWRlcl9fc3dpdGNoJykudG9nZ2xlQ2xhc3MoJ2hlYWRlcl9fc3dpdGNoLS1vcGVuJyk7XHJcblx0JCgnLmhlYWRlcl9faW5uZXInKS50b2dnbGVDbGFzcygnaGVhZGVyX19pbm5lci0tb3BlbicpO1xyXG59KTtcclxuXHJcbiQoJy5oZWFkZXJfX25hdi1pdGVtIGEnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgJCgnLmhlYWRlcl9fc3dpdGNoJykucmVtb3ZlQ2xhc3MoJ2hlYWRlcl9fc3dpdGNoLS1vcGVuJyk7XHJcbiAgICQoJy5oZWFkZXJfX2lubmVyJykucmVtb3ZlQ2xhc3MoJ2hlYWRlcl9faW5uZXItLW9wZW4nKTtcclxufSk7XHJcblxyXG5pZigkKCcuaGVhZGVyJykuaGFzQ2xhc3MoXCJoZWFkZXItLWVtcHR5XCIpKSB7XHJcblx0JCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDEwMCkge1xyXG5cdFx0XHQkKCcuaGVhZGVyJykucmVtb3ZlQ2xhc3MoXCJoZWFkZXItLWVtcHR5XCIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JCgnLmhlYWRlcicpLmFkZENsYXNzKFwiaGVhZGVyLS1lbXB0eVwiKTtcclxuXHRcdFx0XHJcblx0XHR9XHJcblx0fSlcclxufVxyXG4gXHJcblx0XHJcbiIsInZhciBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG52YXIgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcclxudmFyIHRyaWdnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtb3Blbi1tb2RhbCcpO1xyXG52YXIgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2Nsb3NlJyk7XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVNb2RhbCgpIHtcclxuXHRtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdtb2RhbC0tb3BlbmVkJyk7XHJcblx0Ym9keS5jbGFzc0xpc3QudG9nZ2xlKCdzY3JvbGwtaGlkZGVuJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdpbmRvd09uQ2xpY2soZXZlbnQpIHtcclxuXHRpZiAoZXZlbnQudGFyZ2V0ID09PSBtb2RhbCkge1xyXG5cdFx0dG9nZ2xlTW9kYWwoKTtcclxuXHR9XHJcbn1cclxuXHJcbmZvcih2YXIgaSA9IDA7IGkgPCB0cmlnZ2VyLmxlbmd0aDsgaSsrKSB7XHJcblx0dHJpZ2dlcltpXS5vbmNsaWNrID0gdG9nZ2xlTW9kYWw7XHJcbn1cclxuXHJcbmlmIChjbG9zZUJ1dHRvbiAhPT0gbnVsbCkge1xyXG5cdGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlTW9kYWwpO1xyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB3aW5kb3dPbkNsaWNrKTtcclxuIiwiJCgnLnByb2R1Y3Qtc2xpZGVyX19mb3InKS5zbGljayh7XHJcbiAgc2xpZGVzVG9TaG93OiAxLFxyXG4gIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gIGFycm93czogZmFsc2UsXHJcbiAgZmFkZTogdHJ1ZSxcclxuICBhc05hdkZvcjogJy5wcm9kdWN0LXNsaWRlcl9fbmF2J1xyXG59KTtcclxuJCgnLnByb2R1Y3Qtc2xpZGVyX19uYXYnKS5zbGljayh7XHJcbiAgc2xpZGVzVG9TaG93OiA1LFxyXG4gIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gIGFzTmF2Rm9yOiAnLnByb2R1Y3Qtc2xpZGVyX19mb3InLFxyXG4gIGRvdHM6IGZhbHNlLFxyXG4gIGFycm93czogZmFsc2UsXHJcbiAgZm9jdXNPblNlbGVjdDogdHJ1ZSxcclxuICB2YXJpYWJsZVdpZHRoOiB0cnVlXHJcbn0pO1xyXG5cclxuXHJcbiAgJCgnLnByb2R1Y3Qtc2xpZGVyX19mb3InKS5tYWduaWZpY1BvcHVwKHtcclxuICAgIHR5cGU6ICdpbWFnZScsXHJcbiAgICBkZWxlZ2F0ZTogJ2EnLFxyXG4gICAgY2xvc2VPbkNvbnRlbnRDbGljazogdHJ1ZSxcclxuICAgIG1haW5DbGFzczogJ21mcC1pbWctbW9iaWxlJyxcclxuXHJcbiAgICBnYWxsZXJ5OiB7XHJcbiAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgIG5hdmlnYXRlQnlJbWdDbGljazogdHJ1ZSxcclxuICAgICAgcHJlbG9hZDogWzAsMV0gLy8gV2lsbCBwcmVsb2FkIDAgLSBiZWZvcmUgY3VycmVudCwgYW5kIDEgYWZ0ZXIgdGhlIGN1cnJlbnQgaW1hZ2VcclxuICAgIH1cclxuICB9KTsiLCIkKCcuc2xpZGVyLWltZycpLnNsaWNrKHtcclxuICBpbmZpbml0ZTogdHJ1ZSxcclxuICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgbmF2OiB0cnVlLFxyXG4gIHByZXZBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGlkZXItaW1nX19hcnJvdyBzbGlkZXItaW1nX19hcnJvdy0tcHJldlwiPjwvYnV0dG9uPicsXHJcbiAgbmV4dEFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWRlci1pbWdfX2Fycm93IHNsaWRlci1pbWdfX2Fycm93LS1uZXh0XCI+PC9idXR0b24+JyxcclxufSk7Il19
