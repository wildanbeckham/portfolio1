$('.nav-link, .navbar-brand').click(function() {
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(sectionTo).offset().top - 60
    }, 1250, 'easeInOutExpo');
});

$('.carousel').carousel({
  interval: 1000
})