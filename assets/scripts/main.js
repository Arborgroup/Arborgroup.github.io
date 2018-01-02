// This is where it all goes :)
$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if( target.length ) {
    
    if ($(window).width() < 840) {
      event.preventDefault();
      $('html, body').stop().animate({
          scrollTop: target.offset().top-96
      }, 1000);
    }
    else {
      event.preventDefault();
      $('html, body').stop().animate({
          scrollTop: target.offset().top
      }, 1000);
    }
  }
});
