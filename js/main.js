var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
});

jQuery('body').keydown(function(e){
    // left arrow
  if (e.keyCode == 37)
  {   
      $('.slider-button--prev').click();
  }
    // right arrow
  if (e.keyCode == 39)
  {
      $('.slider-button--next').click();
  }   
});



