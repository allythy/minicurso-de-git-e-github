$(document).ready(function() {
  $('.parallax').parallax();
});

$('.button-collapse').sideNav();

$(document).ready(function() {
  $('.scrollspy').scrollSpy({
    scrollOffset: 0
  });
});

// Menu scroll
jQuery(document).ready(function($) {

  var controleNav = false;
  $(document).scroll(function(e) {
    var scrollTop = $(document).scrollTop();
    if (scrollTop > 100) {
      if (controleNav == false) {
        $('nav').first().removeClass('transparent');
        controleNav = true;
      }
    } else {
      if (controleNav == true) {
        $('nav').first().addClass('transparent');
        controleNav = false;
      }
    }
  });
});
