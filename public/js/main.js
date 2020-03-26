(function(){
  //Init Slider
$('.slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows : false,
  dots : true,
  autoplay : false,
  fade: true,
  speed: 700,
  pauseOnHover : false,
});


if ($('.page-home').length > 0) {
  // Function para el degradado del top nav
  $(window).scroll(function(event){
    if(!$('.top-header').visible(true)) {
      $('.top-nav').addClass('bg-gray');
    } else {
      $('.top-nav').removeClass('bg-gray');
    }
  });
}

if ($('.page-about').length > 0) {
  $(window).scroll(function(event){
    if(!$('.tittle').visible(true)) {
      $('.top-nav').addClass('bg-gray');
    } else {
      $('.top-nav').removeClass('bg-gray');
    }
  });
}

if ($('.page-marketing').length > 0) {
  // Function para el degradado del top nav
  $(window).scroll(function(event){
    if(!$('.top-banner').visible(true)) {
      $('.top-nav').addClass('bg-gray');
    } else {
      $('.top-nav').removeClass('bg-gray');
    }
  });
}

if ($('.page-content').length > 0) {
  // Function para el degradado del top nav
  $(window).scroll(function(event){
    if(!$('.top-banner').visible(true)) {
      $('.top-nav').addClass('bg-gray');
    } else {
      $('.top-nav').removeClass('bg-gray');
    }
  });
}

if ($('.page-technology').length > 0) {
  // Function para el degradado del top nav
  $(window).scroll(function(event){
    if(!$('.top-banner').visible(true)) {
      $('.top-nav').addClass('bg-gray');
    } else {
      $('.top-nav').removeClass('bg-gray');
    }
  });
}

if ($('.page-contact').length > 0) {
  // Function para el degradado del top nav
  $(window).scroll(function(event){
    if(!$('.title').visible(true)) {
      $('.top-nav').addClass('bg-gray');
    } else {
      $('.top-nav').removeClass('bg-gray');
    }
  });
}
  // Animate scroll
  $('#button-scroll').on('click',function (e) {
    e.preventDefault();
    var sizeAnimation = $('.top-header').height();
    $('html, body').stop().animate({
      'scrollTop': sizeAnimation     
    }, 900, 'swing');
  });

// Side Menu
$(document).ready(function() {
    $('#right-menu').sidr({
      name: 'sidr-right',
      side: 'right'
    });
});

  $('#right-close').on('click', function(){
    $.sidr('close','sidr-right');
  });
//////////////
// Work Slider
///////////////
  $('.sliderr-for').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows: false,
     fade: true,
     asNavFor: '.sliderr-nav'
   });

   $('.sliderr-nav').slick({
     slidesToShow: 4,
     slidesToScroll: 1,
     asNavFor: '.sliderr-for',
     centerMode: false,
     focusOnSelect: true,
     responsive: [
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 1,
           }
         },
         {
           breakpoint: 768,
           settings: {
             slidesToShow:2,
             slidesToScroll: 1,

           }
         },
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
              fade: true,
              speed: 700,
              pauseOnHover : true,  
              customPaging : function(slider, i) {
                 return '<a class="slide-dot"></a>';
              }         
           }
         }
       ]
   });

})(jQuery);
