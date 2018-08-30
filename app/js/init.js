$(document).ready(function(){
  //init slick carousel
  $('.reviews-carousel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
  });
    $('.requests-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
 });