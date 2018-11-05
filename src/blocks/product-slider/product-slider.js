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